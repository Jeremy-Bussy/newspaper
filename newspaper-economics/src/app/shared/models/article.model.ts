import { LocalisationModel } from './localisationModel';
export class ArticleModel {
  id: number | null = null;
  titre: string | null = null;
  preview: string | null = null;
  corp: string | null = null;
  image: string | null = null;
  auteur_name: string | null = null;
  auteur_id: number | null = null;
  premium: boolean = false;
  visible: boolean = true;
  categorie_id: number | null = null;
  categorie_name: string | null = null;
  date_creation: string | null = null;
  localisation: LocalisationModel[] = [];
}
export { LocalisationModel };

