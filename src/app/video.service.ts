import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from './video';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  API_URL = 'http://localhost/api-video/';

  constructor(private http: HttpClient) { }

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this. API_URL);
  }
    
}
