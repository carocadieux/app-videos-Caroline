import { Component, Input} from '@angular/core';
import { Video } from '../video';
import { VIDEOS } from '../mock-videos';
import { Categories } from '../categories';
import { CATEGORIES } from '../mock-categories';

@Component({
  selector: 'app-liste-videos-thumbnail',
  templateUrl: './liste-videos-thumbnail.component.html',
  styleUrls: ['./liste-videos-thumbnail.component.css']
})
export class ListeVideosThumbnailComponent {
  videos: Video[] = VIDEOS;
  @Input() categorie: Categories = {
    nomCategorie: "",
  };
}
