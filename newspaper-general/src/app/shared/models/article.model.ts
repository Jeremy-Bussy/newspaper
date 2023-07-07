export class ArticleModel {
  id: number | null = null;
  title: string | null = null;
  content: string | null = null;
  date_creation: string | null = null;
  premium: boolean = false;
  visible: boolean = false;
  image: string | null = null;
  author: string | null = null;
}