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


  constructor(private videoService: VideoService, private route: ActivatedRoute) { 
    const id = this.route.snapshot.paramMap.get('id');
      if(id) {
        console.log(id);
        this.getVideo(id);
      }
    }


    getVideo(id: string): void {
      this.videoService.getVideo(id)
      .subscribe(resultat => this.video = resultat);
      
    }

 

  

}




