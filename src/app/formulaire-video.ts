import { Duree } from './duree';
import { SousTitres } from './sous-titres';


export interface FormulaireVideo {
    nom : string;
    description : string;
    catégories: string;
    code : string;
    datePublication: Date;
    duree: Duree;
    sous_titres: SousTitres;
}
