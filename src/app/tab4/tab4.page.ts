import { AppService } from './../app.service';
import { OutgoingEvent } from './../types/outgoing-event';
import { AppData } from './../types/app-data';
import { AppStateService } from './../app-state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {

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
