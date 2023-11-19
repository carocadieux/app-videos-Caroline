import { Duree } from './duree';


export interface FormulaireVideo {
    nom : string;
    description : string;
    catégories: string;
    code : string;
    datePublication: Date;
    duree: Duree;
    sous_titres: string;
}
