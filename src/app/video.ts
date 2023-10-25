import {Avis} from '../app/avis'
import {Utilisateur} from './utilisateur'

export interface Video {
    nom: string;
    description: string;
    code: string;
    categories: string[];
    auteur: Utilisateur;
    datePublication: Date;
    duree: number;
    nombreVues: number;
    avis: Avis[];
    url_image: string;
    score_video: number;
}
