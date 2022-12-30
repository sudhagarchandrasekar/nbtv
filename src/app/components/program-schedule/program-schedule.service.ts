import { CalendarDay } from './../../types/calendar-day';
import { Schedule } from './../../types/schedule';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramScheduleService {

  private scheduleList: Schedule[];

  constructor(private httpClient: HttpClient) {}

  /**
   * For now fetched the schedule list from the json
   * In future this can fetch the program list from any webservice / firebase
   */
  fetchScheduleList(): Observable<Schedule[]> {
    return this.httpClient.get<Schedule[]>('../../../assets/data/program_schedule.json');
  }

  setScheduleList(scheduleList: Schedule[]) {
    this.scheduleList = scheduleList;
  }

  getScheduleList(): Schedule[] {
    return this.scheduleList;
  }

  getNext7CalendarDays(): CalendarDay[] {
    const next7Days: CalendarDay[] = [];
    try {
      const todayDate = new Date();
      const today: CalendarDay = {
        date: todayDate,
        label: 'Today',
        day: todayDate.getDay()
      };
      next7Days.push(today);

      const tomorrowDate = new Date();
      tomorrowDate.setDate(new Date().getDate()+1);
      const tomorrow: CalendarDay = {
        date: tomorrowDate,
        label: 'Tomorrow',
        day: tomorrowDate.getDay()
      };

      next7Days.push(tomorrow);
      for(let counter=2; counter < 7; counter ++ ) {
        const nextDate = this.addDays(counter);
        next7Days.push(nextDate);
      }
    }
    catch(err) {
      return null;
    }
    return next7Days;
  }

  addDays(noOfDays: number): CalendarDay {
    const nextDate = new Date();
    nextDate.setDate(new Date().getDate()+noOfDays);
    const dateLabel = nextDate.toLocaleString().split(',')[0];
    const next: CalendarDay = {
      date: nextDate,
      label: dateLabel,
      day: nextDate.getDay()
    };
    return next;
  }

}
