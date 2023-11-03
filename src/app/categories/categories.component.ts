import { Component, Input } from '@angular/core';
import { Categories } from '../categories';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  @Input() categorie: Categories = {
    nomCategorie: "",
  };

 
  
}
