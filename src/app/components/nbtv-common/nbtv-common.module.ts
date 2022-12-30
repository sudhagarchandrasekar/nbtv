import { EmailComposer } from '@awesome-cordova-plugins/email-composer';
import { LiveTvComponent } from './../live-tv/live-tv.component';
import { ProgramScheduleComponent } from './../program-schedule/program-schedule.component';
import { ProfileComponent } from './../profile/profile.component';
import { MenuContentComponent } from './../menu-content/menu-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RadioComponent } from './../radio/radio.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  exports: [ProfileComponent, MenuContentComponent, ProgramScheduleComponent, LiveTvComponent, RadioComponent ],
  declarations: [ProfileComponent, MenuContentComponent, ProgramScheduleComponent, LiveTvComponent, RadioComponent ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: []
})
export class NbtvCommonModule { }
