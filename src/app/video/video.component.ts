import { Component, Input } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
[x: string]: any;
 @Input() video:Video = {
    id: "",
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
  


  constructor(private videoService: VideoService, private route: ActivatedRoute) { 
    const id = this.route.snapshot.paramMap.get('id');
      if(id) {
        console.log(id);
        this.getVideo(id);
        this.getAvis(id);
      }
    }


    getVideo(id: string): void {
      this.videoService.getVideo(id)
      .subscribe(resultat => this.video = resultat);

      
    }

    getAvis(id: string): void {
      this.videoService.getAvis(id)
      .subscribe(resultat => this.video.avis = resultat);
      
      
    }

    parseFloatWrapper(value: any): number {
      return parseFloat(value);
    }

  

}




