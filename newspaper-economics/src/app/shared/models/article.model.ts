import { LocalisationModel } from './localisationModel';
export class ArticleModel {
  id: number | null = null;
  titre: string | null = null;
  preview: string | null = null;
  corp: string | null = null;
  image: string | null = null;
<<<<<<< HEAD
  auteur_name: string | null = null;
  auteur_id: number | null = null;
  premium: boolean = false;
  visible: boolean = true;
  categorie_id: number | null = null;
  categorie_name: string | null = null;
=======
  auteur: string | null = null;
  premium: boolean = false;
  visible: boolean = false;
  categorie: string | null = null;
>>>>>>> b25d98adf670e8f55d86958ff7ee61c61b4ea2fe
  date_creation: string | null = null;
  localisation: LocalisationModel[] = [];
}
