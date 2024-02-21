import { Component, Input, Inject } from '@angular/core';
import { Video } from '../video';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VideoService } from '../video.service';
import { NgForm } from '@angular/forms';




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
      id : 1,
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

  constructor(private videoService: VideoService, public dialogRef: MatDialogRef<FormulaireVideoComponent>,  @Inject(MAT_DIALOG_DATA) public data: Video) { 
    if (data) {
      this.video = data;
      console.log("formulaire-video");
      console.log(data);
      }
      
  }

  ngOnInit(): void {
  }

  addVideo(videoForm: NgForm) {
      if (videoForm.valid) {
        this.videoService.addVideo(this.video).subscribe(
          _ => {
            videoForm.resetForm();
            this.dialogRef.close();
          }
        );
      }
    }

    showFormVideo(video: Video) {
      this.video = video;
    }
      

    updateVideo(videoForm: NgForm) {
      if (videoForm.valid) {
        this.videoService.updateVideo(this.video).subscribe(
          _ => {
            videoForm.resetForm();
            this.dialogRef.close();
          }
        );
      }
    }
      

  get() {
    
    console.log(
      this.video);
    }

  
}


  

  








