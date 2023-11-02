import { Component, Input } from '@angular/core';
import { UTILISATEUR } from '../mock-utilisateur';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.css']
})
export class EnteteComponent {
  user: Utilisateur[] = UTILISATEUR;
}
