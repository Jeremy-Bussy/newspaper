import { LocalisationModel } from './localisationModel';
export class ArticleModel {
  id: number | null = null;
  titre: string | null = null;
  preview: string | null = null;
  corp: string | null = null;
  image: string | null = null;
  auteur: string | null = null;
  premium: boolean = false;
  visible: boolean = false;
  categorie: string | null = null;
  date_creation: string | null = null;
  localisation: LocalisationModel[] = [];
}
