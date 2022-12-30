import { CalendarDay } from './../../types/calendar-day';
import { ToastController } from '@ionic/angular';
import { AppStateService } from './../../app-state.service';
import { Schedule } from './../../types/schedule';
import { ProgramScheduleService } from './program-schedule.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-schedule',
  templateUrl: './program-schedule.component.html',
  styleUrls: ['./program-schedule.component.scss'],
})
export class ProgramScheduleComponent implements OnInit {

  showLoader = false;
  next7Days: CalendarDay[] = [];
  isDataInitialized = false;
  programSchedule: Schedule = null;

  weeklySchedule: Schedule[] = [];

  constructor(private programScheduleService: ProgramScheduleService,
    private appStateService: AppStateService,
    private toastController: ToastController) { }


  ngOnInit() {
    this.getProgramSchdule();
  }

  getProgramSchdule() {
    this.showLoader = true;
    const programSchedule = this.programScheduleService.fetchScheduleList().subscribe(response => {
      console.dir(response);
      this.appStateService.setProgramSchdule(response['schedule']);
      this.getNext7CalendarDays();
      this.setSchedule();
      this.weeklySchedule = response;
      this.isDataInitialized = true;
      this.showLoader = false;
    },error => {
      console.error(error);
      this.showLoader = false;
      this.showErrorMessage();
      this.isDataInitialized = true;
    });
  }

  getNext7CalendarDays() {
    this.next7Days = this.programScheduleService.getNext7CalendarDays();
  }

  changeSchedule(event) {
    console.dir(event);
    this.setSchedule(event.detail.value);
  }

  /** if no data is passed select the current Date */
  setSchedule(date?: CalendarDay) {
    let dayOfWeek = 0;
    if(date != null) {
      dayOfWeek = date.day;
    }
    let sched = this.appStateService.getProgramSchedule();
    if(sched === undefined) {
      sched = this.weeklySchedule;
    }
    this.programSchedule = sched[dayOfWeek];
  }

  async showErrorMessage() {
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: 'Error communicating with server'
    });

    await toast.present();
  }

}
