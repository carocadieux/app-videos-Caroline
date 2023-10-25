import { Component, Input } from '@angular/core';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent {
  @Input() user:Utilisateur = {
    nom: "",
    description: "",
    verifier: "",
  }
}
