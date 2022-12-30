
import { AppStateService } from './../../app-state.service';
import { UrlSource } from './../../types/url-source';
import { AppService } from './../../app.service';
import { OutgoingEvent } from './../../types/outgoing-event';
import { AppData } from './../../types/app-data';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-content',
  templateUrl: './menu-content.component.html',
  styleUrls: ['./menu-content.component.scss'],
})
export class MenuContentComponent implements OnInit {

  @Input() appData: AppData;

  selectedTVSource: UrlSource = null;
  constructor(private appService: AppService,
    private appStateService: AppStateService
    ) { }

  ngOnInit() {
    console.dir(this.appData.liveTvURL);
    this.selectedTVSource = this.appData.liveTvURL[0];
    console.dir(this.appData);
  }

  onOugoingEvent(outgoingEvent: OutgoingEvent) {
    console.dir(outgoingEvent);
    this.appService.handleOutgoingEvent(outgoingEvent);
  }

  changeLiveTVSource(event) {
    console.dir(event.detail.value);
    this.appStateService.setLiveTvSource(event.detail.value);
  }


}
