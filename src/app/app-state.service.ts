import { UrlSource } from './types/url-source';
import { Schedule } from './types/schedule';
import { AppData } from './types/app-data';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  private appData: AppData = null;
  private programSchedule: Schedule[] = [];
  private liveTVSource: UrlSource = null;
  private liveTVSourceSubject = new Subject<UrlSource>();

  constructor() { }

  getAppData(): AppData {
    return this.appData;
  }

  setAppData(appData: AppData) {
    this.appData = appData;
  }

  getProgramSchedule(): Schedule[] {
    return this.programSchedule;
  }

  setProgramSchdule(schedule: Schedule[]) {
    this.programSchedule = schedule;
  }

  setLiveTvSource(liveTvSource: UrlSource) {
    this.liveTVSource = liveTvSource;
    console.log('Going to multicast the change');
    this.liveTVSourceSubject.next(liveTvSource);
  }

  getLiveTvSource(): UrlSource {
    return this.liveTVSource;
  }

  getLiveTVSourceSubject(): Subject<UrlSource> {
    return this.liveTVSourceSubject;
  }

}
