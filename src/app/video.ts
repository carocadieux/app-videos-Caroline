import {Avis} from '../app/avis'
import {Auteur} from '../app/auteur'

export interface Video {
    nom: string;
    description: string;
    code: string;
    categories: string[];
    auteur: Auteur;
    datePublication: Date;
    duree: number;
    nombreVues: number;
    avis: Avis[];
    url_image: string;
    score_video: number;
}
