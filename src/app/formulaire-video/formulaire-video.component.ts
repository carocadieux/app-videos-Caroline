import { Component, Input } from '@angular/core';
import { Video } from '../video';




@Component({
  selector: 'app-formulaire-video',
  templateUrl: './formulaire-video.component.html',
  styleUrls: ['./formulaire-video.component.css'],
  
  
  
  
})
export class FormulaireVideoComponent {
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
    datePublication: new Date(),
    duree: 
      {
        max: 100,
        min: 0,
        step: 1,
        value: 0,
        
      },
    
    
    nombreVues: 0,
    avis: [
      {
        note: 0,
        commentaires: "",
      }
    ]
                    
  };

  get() {
    
    console.log(
      this.video);
    }

  
}


  

  








