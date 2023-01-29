import { ToastController } from '@ionic/angular';
import { UrlSource } from './../../types/url-source';
import { AppData } from './../../types/app-data';
import { AppStateService } from './../../app-state.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { StreamingMedia, StreamingVideoOptions } from '@awesome-cordova-plugins/streaming-media/ngx';
import { Platform } from '@ionic/angular';
import { AppService } from './../../app.service';

@Component({
  selector: 'app-live-tv',
  templateUrl: './live-tv.component.html',
  styleUrls: ['./live-tv.component.scss'],
})
export class LiveTvComponent implements OnInit {

  @ViewChild('video_player_iframe') iframeVideoPlayerComponent: ElementRef;

  appData: AppData = null;
  isVideoLoaded = false;
  selectedSource: UrlSource = null;
  // be default open the app in portrait mode
  isPortait = true;
  currentScreenOrientation = 'portrait';

  constructor(private appStateService: AppStateService,
    private domSanitizer: DomSanitizer,
    private screenOrientation: ScreenOrientation,
    private streamingMedia: StreamingMedia,
    private toastController: ToastController,
    private platform: Platform,
    private appService: AppService) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.appData = this.appStateService.getAppData();
    // lock to portrait mode initially
    this.selectedSource = this.appData.liveTvURL[1];
    this.changeToPortait();
    //this.setUpLiveTVPlayer();
    // this.changeLiveTVSource();
    this.initializeScreenOrientation();
  }

  changeLiveTVSource() {
    console.log('changeLiveTVSource');
    this.appStateService.getLiveTVSourceSubject().subscribe((response => {
      console.dir(response);
      this.selectedSource = response;
      this.setUpLiveTVPlayer();
    }), (error => {
      console.error(error);
      this.showErrorMessage();
    }));
  }

  setUpLiveTVPlayer() {
    console.dir(this.selectedSource);
    if(this.selectedSource.isHLS === true && this.isPortait === false) {
      //this.setUpHlsSource();
      this.setUpIFrameSource();
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
    this.appService.setfullscreensync(1);
    //this.selectedSource = this.appData.liveTvURL[1];
    if(this.platform.is('android')) {
      this.screenOrientation.unlock();
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    }
    //this.setUpLiveTVPlayer();
  }

  changeToPortait() {
  console.log(" comming tr");
    this.isPortait = true;
    this.appService.setfullscreensync(0);
    //this.selectedSource = this.appData.liveTvURL[1];
    if(this.platform.is('android')) {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
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
        //this.setUpLiveTVPlayer();
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



}
