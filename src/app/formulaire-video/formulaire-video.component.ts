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
    categories: [],
    auteur: {
      nom: "",
      description: "",
      verifier: '',
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



  remove(categorie: string) {
    // Logique pour supprimer la catégorie
    const index = this.video.categories.indexOf(categorie);
    if (index !== -1) {
      this.video.categories.splice(index, 1);
    }
  }
}
