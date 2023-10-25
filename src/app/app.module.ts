import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeVideosComponent } from './liste-videos/liste-videos.component';
import { VideoComponent } from './video/video.component';
import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component';
import { ListeVideosThumbnailComponent } from './liste-videos-thumbnail/liste-videos-thumbnail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListeVideosComponent,
    VideoComponent,
    VideoThumbnailComponent,
    ListeVideosThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
