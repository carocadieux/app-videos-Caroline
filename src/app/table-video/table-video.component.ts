import { Component, OnInit, ViewChild } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormulaireVideoComponent } from '../formulaire-video/formulaire-video.component';



  

@Component({
  selector: 'app-table-video',
  templateUrl: './table-video.component.html',
  styleUrls: ['./table-video.component.css']
})
export class TableVideoComponent implements OnInit{
  dataSourceVideos: MatTableDataSource<Video> = new MatTableDataSource();
  columnsToDisplay = ['nom',  'actions'];

  @ViewChild(MatTable) tableVideos!: MatTable<Video>;

  /* Pour la pagniation et le tri */
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  video: Video = { nom: '',
                   description: '', 
                   code: '', 
                   nomCategorie: [], 
                   auteur:  {id:1, nom:'', description: '', verifier:''},
                   datePublication: new Date().toString(),
                   duree: 0,
                   nombreVues: 0,
                   score_video: 0,
                   sous_titres: [],
                   avis: [],
                   url_image: '',

                  };

  constructor(private videoService: VideoService, public dialog: MatDialog) { }
    ngOnInit(): void {
    this.getVideos()
  }

  showFormVideo(video: Video) {
    this.video = video;
  }

  updateVideo(videoForm: NgForm) {
      if (videoForm.valid) {
        this.videoService.updateVideo(this.video).subscribe(_ => {
        videoForm.resetForm();
          /*this.getVideos();
          this._snackBar.open("Héro modifié!", undefined, {
          duration: 2000
          });*/
        });
      }
  }
    

  getVideos() {
    this.videoService.getVideos().subscribe(
    resultat => {
      console.log(resultat);

      /* associer les résultats reçus par l'API à la source de données du tableau */
      this.dataSourceVideos = new MatTableDataSource(resultat);
      /* Pour la pagniation et le tri */
      this.dataSourceVideos.paginator = this.paginator;
      this.dataSourceVideos.sort = this.sort;
      /* générer les résultats du tableau */
      this.tableVideos.renderRows();
    });
  }

  openDialog(video?: Video) {
    console.log(video);
    const dialogRef = this.dialog.open(FormulaireVideoComponent, {
    data: video,
    });
    dialogRef.afterClosed().subscribe(result => {
    console.log('Le dialog du formulaire de video a été fermé');
    this.getVideos();
    });
    }




  addVideo(videoForm: NgForm) {
    if (videoForm.valid) {
      this.videoService.addVideo(this.video).subscribe(_ => {
        videoForm.resetForm();
        this.getVideos();
      });
    }
  }

  deleteVideo(id: string) {
    this.videoService.deleteVideo(id).subscribe(
      _ => {
      this.getVideos();
      }
    );
  }


}
