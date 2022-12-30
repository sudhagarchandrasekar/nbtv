import { AppService } from './../app.service';
import { OutgoingEvent } from './../types/outgoing-event';
import { AppData } from './../types/app-data';
import { AppStateService } from './../app-state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  appData: AppData;
  constructor(private appStateService: AppStateService,
    private appService: AppService) {}

  ngOnInit() {
    console.dir(this.appStateService.getAppData());
    this.appData = this.appStateService.getAppData();
  }

  onOugoingEvent(outgoingEvent: OutgoingEvent) {
    console.dir(outgoingEvent);
    this.appService.handleOutgoingEvent(outgoingEvent);
  }


}
