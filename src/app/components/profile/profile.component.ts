import { OutgoingEventType } from './../../types/outgoing-event-type';
import { OutgoingEvent } from './../../types/outgoing-event';
import { Email } from './../../types/email';
import { SocialMedia } from './../../types/social-media';
import { Website } from './../../types/website';
import { Phone } from './../../types/phone';
import { Profile } from './../../types/profile';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  @Input() profile: Profile;
  @Output() profileEvent: EventEmitter<OutgoingEvent> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.dir(this.profile);
  }

  handleEmail(email: Email) {
    console.dir(email);
    const outgoingEvent: OutgoingEvent = {
      type: OutgoingEventType.EMAIL,
      value: email.id
    };
    this.profileEvent.emit(outgoingEvent);
  }

  handlePhone(phone: Phone) {
    console.dir(phone);
    const outgoingEvent: OutgoingEvent = {
      type: OutgoingEventType.PHONE,
      value: phone.phNumber
    };
    if(phone.whatsapp) {
      outgoingEvent.type = OutgoingEventType.WHATSAPP;
    }
    this.profileEvent.emit(outgoingEvent);
  }

  handleWebsite(site: Website) {
    console.dir(site);
    const outgoingEvent: OutgoingEvent = {
      type: OutgoingEventType.WEBSITE,
      value: site.url
    };
    this.profileEvent.emit(outgoingEvent);
  }

  handleSocialMedia(socialMedia: SocialMedia) {
    console.dir(socialMedia);
    const outgoingEvent: OutgoingEvent = {
      type: OutgoingEventType.WEBSITE,
      value: socialMedia.url
    };
    this.profileEvent.emit(outgoingEvent);
  }

}
