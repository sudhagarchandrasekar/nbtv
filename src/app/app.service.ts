import { OutgoingEvent } from './types/outgoing-event';
import { Injectable } from '@angular/core';
import { OutgoingEventType } from './types/outgoing-event-type';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { Browser } from '@capacitor/browser';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  private fullscreensync = new Subject<any>();
  constructor(private callNumber: CallNumber, private emailComposer: EmailComposer) { }

  setfullscreensync(row:any) {
    this.fullscreensync.next(row);
  }

  getfullscreensync(): Observable<any> {
    return this.fullscreensync.asObservable();
  }

  handleOutgoingEvent(outgoingEvent: OutgoingEvent): boolean {
    console.dir(outgoingEvent);
    let retValue = true;

    switch(outgoingEvent.type) {
      case OutgoingEventType.EMAIL: {
      console.log('commmmm 1');
        retValue = this.invokeEmail(outgoingEvent.value);
        break;
      }
      case OutgoingEventType.WEBSITE: {
        this.invokeBrowser(outgoingEvent.value);
        break;
      }
      case OutgoingEventType.PHONE: {
        retValue = this.invokeDiallerApp(outgoingEvent.value);
        break;
      }
      case OutgoingEventType.WHATSAPP: {
        retValue = this.invokeWhatsapp(outgoingEvent.value);
        break;
      }
    }
    return retValue;
  }

  private invokeDiallerApp(value: string): boolean {
    let val = false;
    this.callNumber.callNumber(value,false).then(response => {
      // do nothing'hbg
      val = true;
    }).catch(error => {
      console.error(error);
      val = false;
    });
    return val;
  }

  private invokeWhatsapp(value: string) {
    const val = false;
    (<any>window).open('whatsapp://send?phone='+value);
    return val;
  }

  private async invokeBrowser(value: string) {
    const val = false;
    await Browser.open({ url: value});
    return Promise.resolve(true);
  }

  private invokeEmail(value: string) {
    const val = false;
    console.log('commmmm 2');
    const email = {
      to: value,
      subject: 'Nakkubetta TV mobile app Feedback',
      body: 'I would like to share feedback about the Nakkubetta TV mobile app',
      isHtml: true
    };
    console.log('twat  2');
   
    this.emailComposer.isAvailable().then((available: boolean) => {
    console.log('twat  1');
    console.log(available);
       if(available) {
          this.emailComposer.open(email);
         // Now we know we can send an email, calls hasClient and hasAccount
         // Not specifying an app will return true if at least one email client is configured
       }
      });
    return val;
  }

}
