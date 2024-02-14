import {Avis} from '../app/avis'
import {Utilisateur} from './utilisateur'
import { Duree } from './duree';
import { Categories } from './categories';



export interface Video {
    id?: string;
    nom: string;
    description: string;
    code: string;
    nomCategorie: string[];
    auteur: Utilisateur;
    datePublication: string;
    duree: number;
    nombreVues: number;
    avis: Avis[];
    url_image: string;
    score_video: number;
    sous_titres: string[],
}
