import { Component, OnInit, ViewChild } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table-video',
  templateUrl: './table-video.component.html',
  styleUrls: ['./table-video.component.css']
})
export class TableVideoComponent implements OnInit{
  dataSourceVideos: MatTableDataSource<Video> = new MatTableDataSource();
  columnsToDisplay = ['nom'];

  @ViewChild(MatTable) tableVideos!: MatTable<Video>;

  /* Pour la pagniation et le tri */
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private videoService: VideoService) { }
    ngOnInit(): void {
    this.getVideos()
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


}
