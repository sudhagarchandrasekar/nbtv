import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { AppData } from './types/app-data';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  appData: AppData;
  channel:any = 'UCIztcOKnrVrXdBjI24CnSHw';
  playlist:any = 'UUIztcOKnrVrXdBjI24CnSHw';
  apiBase:any = 'https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyA4LvNqf079wOTTxB2LlUy2IVXr_iq5fto&part=snippet&maxResults=50&playlistId=';
  apiBaseSort:any = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&safeSearch=none&maxResults=20&key=AIzaSyA4LvNqf079wOTTxB2LlUy2IVXr_iq5fto&channelId=';

  constructor(private httpClient: HttpClient) { }

  /**
   * Fetching data from youtube data api v3
   */
  getVideos(): Observable<any> {
    let options:any = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}), 'xhrFields': { 'withCredentials':true }};
    //{responseType: 'json'}
    return this.httpClient.get<any>(this.apiBaseSort+this.channel+'&order=rating', options);
  }

  getLatestVideos(): Observable<any> {
    let options:any = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}), 'xhrFields': { 'withCredentials':true }};
    //{responseType: 'json'}
    return this.httpClient.get<any>(this.apiBaseSort+this.channel+'&order=date', options);
  }

  getViewedVideos(): Observable<any> {
    let options:any = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}), 'xhrFields': { 'withCredentials':true }};
    //{responseType: 'json'}
    return this.httpClient.get<any>(this.apiBaseSort+this.channel+'&order=viewCount', options);
  }


}
