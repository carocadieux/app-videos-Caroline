import { Component, Input } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.css']
})
export class VideoThumbnailComponent {
  @Input() video:Video = {
    url_image: "",
    sous_titres: [],
    nom: "",
    description: "",
    code: "",
    score_video: 0,
    nomCategorie: [],
    auteur: {
      nom: "",
      description: "",
      verifier: '',
    },
    datePublication: new Date().toString(),
    duree: 0,
  
    nombreVues: 0,
    avis: [
      {
        note: 0,
        commentaires: "",
      }
    ]
                    
  };

  messages = {
    '=0': `Aucun visionnement`,
    '=1': `1 visionnement`,
    'other': `# visionnements`
    
  };


 
}
