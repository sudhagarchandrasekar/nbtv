import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { AppData } from './types/app-data';

@Injectable({
  providedIn: 'root'
})
export class AppComponentService {

  appData: AppData;

  constructor(private httpClient: HttpClient) { }

  /**
   * Currently fetches data from the json file. In future can fetch data from 
   * a webservice / firebase DB ..
   */
  fetchAppData(): Observable<AppData> {
    return this.httpClient.get<AppData>('./assets/data/app_data.json', {responseType: 'json'});
  }

  getAppData(): AppData {
    return this.appData;
  }

  setAppData(appData: AppData) {
    this.appData = appData;
  }


}
