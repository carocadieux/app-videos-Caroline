import { Component, Input } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  @Input() video:Video = {
    url_image: "",
    nom: "",
    description: "",
    code: "",
    categories: [],
    auteur: {
      nom: "",
      description: "",
    },
    datePublication: new Date(),
    duree: 0,
    nombreVues: 0,
    avis: [
      {
        note: 0,
        commentaires: "",
      }
    ]
                    
  };
}