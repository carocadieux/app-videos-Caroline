import { Video } from "./video";

export const VIDEOS: Video[] = [
    {
    url_image:'https://usercontent.one/wp/www.screentune.com/wp-content/uploads/2018/12/MV5BNTAzOTYxMjEtMGNhNC00NGJjLTk4NWQtNWM0M2RjZTU5Njc0XkEyXkFqcGdeQXVyNzA4NDgwNTI@._V1_.jpg?media=1649161309', 
    sous_titres: ['cc'],
    nom: "Halloween",
    description: "La nuit d'Halloween 1963. Le jeune Michael Myers se précipite dans la chambre de sa soeur aînée et la poignarde sauvagement. Après son geste, Michael se mure dans le silence et est interné dans un asile psychiatrique. Quinze ans plus tard, il s'échappe de l'hôpital et retourne sur les lieux de son crime. Il s'en prend alors aux adolescents de la ville.",
    code: '',
    score_video: 7025,
    nomCategorie: ['Horreur'],
    auteur: {
        nom: "John Carpenter",
        description: "John Carpenter est un réalisateur, scénariste, producteur et compositeur américain né le 16 janvier 1948 à Carthage, dans l'État de New York.",
        verifier: 'true' ,
    },
    datePublication: new Date(1978, 10, 25),
    duree: 
        {
            max: 100,
            min: 0,
            step: 1,
            value: 0
        },
    
    nombreVues: 0,
    avis: [
            {
                note: 4,
                commentaires: "Très bon film classique horreur",
            }
        ]
    
    },

    {
        url_image: 'https://picsum.photos/seed/picsum/200/300',
        sous_titres: ['st'],
        nom: 'Halloween',
        description: 'lorem',
        code: '',
        score_video: 6425,
        nomCategorie: [],
        auteur: {
            nom: 'John Carpenter',
            description: 'lorem',
            verifier: 'true',
        },
        datePublication: new Date(1978, 10, 25),
        duree: 
            {
                max: 100,
                min: 0,
                step: 1,
                value: 0
            },
        
        nombreVues: 250000,
        avis: [
                {
                    note: 0,
                    commentaires: 'lorem',
                }
            ]
        },
        {
            url_image: 'https://picsum.photos/seed/picsum/200/300',
            sous_titres: ['cc'],
            nom: 'Halloween',
            description: 'lorem',
            code: '',
            score_video: 68,
            nomCategorie: ["Comedie"],
            auteur: {
                nom: 'John Carpenter',
                description: 'lorem',
                verifier: 'false',
            },
            datePublication: new Date(1978, 10, 25),
            duree: 
                {
                    max: 100,
                    min: 0,
                    step: 1,
                    value: 0
                },
            
            nombreVues: 3000261,
            avis: [
                    {
                        note: 0,
                        commentaires: 'lorem',
                    }
                ]
            },

            {
                url_image: 'https://picsum.photos/seed/picsum/200/300',
                sous_titres: ['st'],
                nom: 'Halloween',
                description: 'lorem',
                code: '',
                score_video: 564,
                nomCategorie: [],
                auteur: {
                    nom: 'John Carpenter',
                    description: 'lorem',
                    verifier: 'false',
                },
                datePublication: new Date(1978, 10, 25),
                duree: 
                    {
                        max: 100,
                        min: 0,
                        step: 1,
                        value: 0
                    },
                nombreVues: 654,
                avis: [
                        {
                            note: 0,
                            commentaires: 'lorem',
                        }
                    ]
                },
                
                {
                    url_image: 'https://picsum.photos/seed/picsum/200/300',
                    sous_titres: ['cc'],
                    nom: 'Halloween',
                    description: 'lorem',
                    code: '',
                    score_video: 98,
                    nomCategorie: ['Horreur'],
                    auteur: {
                        nom: 'John Carpenter',
                        description: 'lorem',
                        verifier: 'true',
                    },
                    datePublication: new Date(1978, 10, 25),
                    duree: 
                        {
                            max: 100,
                            min: 0,
                            step: 1,
                            value: 0
                        },
                    nombreVues: 365125,
                    avis: [
                            {
                                note: 0,
                                commentaires: 'lorem',
                            }
                        ]
                    },
]