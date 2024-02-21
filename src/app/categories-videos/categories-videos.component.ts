import { Component, Input, OnInit} from '@angular/core';
import { Video } from '../video';
import { VIDEOS } from '../mock-videos';
import { Categories } from '../categories';
import { VideoService } from '../video.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-categories-videos',
  templateUrl: './categories-videos.component.html',
  styleUrls: ['./categories-videos.component.css']
})
export class CategoriesVideosComponent implements OnInit{
  categorie="";
  videos: Video[] = VIDEOS;

  constructor(private videoService: VideoService, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('categorie');
   }
  
  ngOnInit(): void {
    this.getVideos();
  }

  getVideos(): void {
    this.videoService.getVideos()
    .subscribe(resultat => this.videos = resultat);
  }
      
    

 /* @Input() categorie: Categories = {
    nomCategorie: "",
  };*/
}

