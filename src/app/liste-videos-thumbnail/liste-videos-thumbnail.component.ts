import { Component, Input, OnInit} from '@angular/core';
import { Video } from '../video';
import { VIDEOS } from '../mock-videos';
import { Categories } from '../categories';
import { CATEGORIES } from '../mock-categories';

import { VideoService } from '../video.service';

@Component({
  selector: 'app-liste-videos-thumbnail',
  templateUrl: './liste-videos-thumbnail.component.html',
  styleUrls: ['./liste-videos-thumbnail.component.css']
})
export class ListeVideosThumbnailComponent  implements OnInit{
  videos: Video[] = VIDEOS;

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos(): void {
    this.videoService.getVideos()
    .subscribe(resultat => this.videos = resultat);
  }
      
    

  @Input() categorie: Categories = {
    nomCategorie: "",
  };
}
