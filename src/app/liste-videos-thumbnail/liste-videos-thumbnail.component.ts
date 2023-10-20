import { Component } from '@angular/core';
import { Video } from '../video';
import { VIDEOS } from '../mock-videos';

@Component({
  selector: 'app-liste-videos-thumbnail',
  templateUrl: './liste-videos-thumbnail.component.html',
  styleUrls: ['./liste-videos-thumbnail.component.css']
})
export class ListeVideosThumbnailComponent {
  videos: Video[] = VIDEOS;
}
