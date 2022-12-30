import { OutgoingEventType } from './../../types/outgoing-event-type';
import { OutgoingEvent } from './../../types/outgoing-event';
import { Email } from './../../types/email';
import { SocialMedia } from './../../types/social-media';
import { Website } from './../../types/website';
import { Phone } from './../../types/phone';
import { AppData } from './../../types/app-data';
import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { UrlSource } from './../../types/url-source';
import { AppStateService } from './../../app-state.service';
import { YoutubeService } from './../../youtube.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { StreamingMedia, StreamingVideoOptions } from '@awesome-cordova-plugins/streaming-media/ngx';
import { Platform } from '@ionic/angular';
import { SwiperComponent } from "swiper/angular";

import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent implements OnInit {

  @Input() appData: AppData;
  @Output() radioEvent: EventEmitter<OutgoingEvent> = new EventEmitter();
  isVideoLoaded = false;
  selectedSource: UrlSource = null;
  // be default open the app in portrait mode
  isPortait = true;
  currentScreenOrientation = 'portrait';
  videos:any = [];
  latestvideos:any = [];
  viewedvideos:any = [];
  constructor(private appStateService: AppStateService,private youtubeService: YoutubeService,
    private domSanitizer: DomSanitizer,
    private screenOrientation: ScreenOrientation,
    private streamingMedia: StreamingMedia,
    private toastController: ToastController,
    private platform: Platform) { }

  ngOnInit() {
    console.dir(this.appData);

      // Play an audio file with options (all options optional)
      var options = {
        bgColor: "#FFFFFF",
        bgImage: '../../../assets/img/radio-logo.jpeg',
        bgImageScale: "fit", // other valid values: "stretch", "aspectStretch"
        initFullscreen: false, // true is default. iOS only.
        keepAwake: false, // prevents device from sleeping. true is default. Android only.
        successCallback: function() {
          console.log("Player closed without error.");
        },
        errorCallback: function(errMsg) {
          console.log("Error! " + errMsg);
        }
      };
    this.streamingMedia.playAudio('http://transcoding.livebox.co.in/liveradio/public/nakkubetta_radio', options);


    // lock to portrait mode initially
    this.changeToPortait();
    this.initializeScreenOrientation();
    this.getVideos();
    this.getLatestVideos();
    this.getViewedVideos();
  }

  getVideos(){
    this.youtubeService.getVideos().subscribe((response:any) => {
    this.videos = response.items;
    }, error => {
      console.error(error);
      this.showErrorMessage();
    });
  }

  getLatestVideos(){
    this.youtubeService.getLatestVideos().subscribe((response:any) => {
    this.latestvideos = response.items;
    }, error => {
      console.error(error);
      this.showErrorMessage();
    });
  }

  getViewedVideos(){
    this.youtubeService.getViewedVideos().subscribe((response:any) => {
    this.viewedvideos = response.items;
    }, error => {
      console.error(error);
      this.showErrorMessage();
    });
  }

  setUpLiveTVPlayer() {
    console.dir(this.selectedSource);
    if(this.selectedSource.isHLS === true && this.isPortait === false) {
      this.setUpHlsSource();
    }
    else if(this.selectedSource.isHLS === false && this.isPortait === true) {
      this.setUpIFrameSource();
    }
  }

  getSanitizedURL(url: string) {
    console.log(url);
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  setUpIFrameSource() {
    /* const iframe = this.iframeVideoPlayerComponent.nativeElement;
    console.dir(this.iframeVideoPlayerComponent.nativeElement);
    iframe.addEventListener('load', ()=> {
      console.log('iframe loaded');
    }); */
  }

  setUpHlsSource() {
    const videoOptions: StreamingVideoOptions = this.getStreamingVideoOptions();
    this.streamingMedia.playVideo(this.selectedSource.url,videoOptions);
  }

  getStreamingVideoOptions(): StreamingVideoOptions {
    const videoOptions: StreamingVideoOptions = {
      controls: true,
      orientation: 'landscape',
      shouldAutoClose: true,
      errorCallback: (err) => {
        console.error(err);
        this.showErrorMessage();
      },
      successCallback: () => {
        // nothing to do
        console.log('yay!!');
      }
    };
    return videoOptions;
  }

  /** Screen Orientation changes */
  changeToLandscape() {
    this.isPortait = false;
    this.selectedSource = this.appData.liveTvURL[0];
    if(this.platform.is('android')) {
      this.screenOrientation.unlock();
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    }
    this.setUpLiveTVPlayer();
  }

  changeToPortait() {
    this.isPortait = true;
    this.selectedSource = this.appData.liveTvURL[1];
    if(this.platform.is('android')) {
      //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
  }

  initializeScreenOrientation() {
    this.screenOrientation.onChange().subscribe((value)=> {
      console.log('Orientation changed to ' + this.screenOrientation.type);
      if(this.currentScreenOrientation !== this.screenOrientation.type) {
        this.currentScreenOrientation = this.screenOrientation.type;
        if(this.platform.is('android')) {
          this.screenOrientation.unlock();
        }
        // if the screen orientation is portrait then show iFrame video
        // if the screen orientation is landscape then show HLS video
        if(this.screenOrientation.type === 'landscape-primary' ||
        this.screenOrientation.type === 'landscape-secondary' ||
        this.screenOrientation.type === 'landscape') {
          this.isPortait = false;
          this.changeToLandscape();
        }
        else if (this.screenOrientation.type === 'portrait-primary' ||
        this.screenOrientation.type === 'portrait-secondary' ||
        this.screenOrientation.type === 'portrait') {
          this.isPortait = true;
          this.changeToPortait();
        }
        console.dir(this.screenOrientation.type);
        this.setUpLiveTVPlayer();
      }
    });
  }

  async showErrorMessage() {
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 3000,
      message: 'Error playing the video. Try the alternate server from settings'
    });
    await toast.present();
  }

  checkMoreVideos(eve:any,type:any){
    console.log('eve', eve);
  }
  

}
