import { LocalisationModel } from '../models/localisationModel';
export class ArticleModel {
  id: number | null = null;
  titre: string | null = null;
  preview: string | null = null;
  corp: string | null = null;
  image: string | null = null;
  author_name: string | null = null;
  premium: boolean = false;
  visible: boolean = false;
  category_name: string | null = null;
  date_creation: string | null = null;
  localisation: LocalisationModel[] = [];
}
