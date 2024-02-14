import { Component, Input } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-ajout-avis',
  templateUrl: './ajout-avis.component.html',
  styleUrls: ['./ajout-avis.component.css']
})
export class AjoutAvisComponent {
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
  }  
}
