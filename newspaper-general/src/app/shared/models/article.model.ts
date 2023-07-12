export class ArticleModel {
  id: number | null = null;
  title: string | null = null;
  preview: string | null = null;
  content: string | null = null;
  date_creation: string | null = null;
  premium: boolean = false;
  visible: boolean = false;
  category: string | null = null;
  image: string | null = null;
  author: string | null = null;
}