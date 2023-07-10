export class ArticleModel {
  id: number | null = null;
  title: string | null = null;
  content: string | null = null;
  date_creation: string | null = null;
  premium: boolean = false;
  visible: boolean = false;
  imageUrl: string | null = null;
  author: string | null = null;
  category: string | null = null;
  longitude: string | null = null;
  latitude: string | null = null;
}
