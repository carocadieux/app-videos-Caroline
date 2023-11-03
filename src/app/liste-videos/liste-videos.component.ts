import { Component, Input } from '@angular/core';
import { VIDEOS } from '../mock-videos';
import { Video } from '../video';
import { Categories} from '../categories';
import { CATEGORIES } from '../mock-categories';

@Component({
  selector: 'app-liste-videos',
  templateUrl: './liste-videos.component.html',
  styleUrls: ['./liste-videos.component.css']
})
export class ListeVideosComponent {
  videos: Video[] = VIDEOS;
  categorie: Categories[] = CATEGORIES;
}
