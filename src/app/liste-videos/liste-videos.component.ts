import { Component, OnInit } from '@angular/core';
import { VIDEOS } from '../mock-videos';
import { Video } from '../video';
import { Categories} from '../categories';
import { CATEGORIES } from '../mock-categories';

import { VideoService } from '../video.service';

@Component({
  selector: 'app-liste-videos',
  templateUrl: './liste-videos.component.html',
  styleUrls: ['./liste-videos.component.css']
})
export class ListeVideosComponent implements OnInit{
  videos: Video[] = [];
  categorie: Categories[] = CATEGORIES;

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos(): void {
    this.videoService.getVideos()
    .subscribe(resultat => {
      console.log(resultat);
      this.videos = resultat;
    });
    }
    
}
