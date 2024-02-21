import { Component, Input } from '@angular/core';
import { Categories } from '../categories';
import { Video } from '../video';
import { VIDEOS } from '../mock-videos';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  videos: Video[] = VIDEOS;

 
  
  @Input() categorie: Categories = {
    nomCategorie: "",
  };

 
  
}
