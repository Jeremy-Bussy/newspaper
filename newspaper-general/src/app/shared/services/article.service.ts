import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ArticleModel } from '../models/article.model';

export class ArticleService {

  constructor(private http: HttpClient) {
  }

  getAllArticles() {
    const url = environment.apiGoogle + '/article/';

    return this.http.get(url);
  }

  getArticleById(id: number) {
    const url = environment.apiGoogle + '/article?id=' + id;

    return this.http.get(url);
  }

  addArticle(article: ArticleModel) {
    const url = environment.apiGoogle + '/article/';

    const params = (
      article
    )
    return this.http.post<any>(url, params);
  }

  hideArticle(id: number) {
    const url = environment.apiGoogle + '/article/hide';

    const params = (
      id
    )
    return this.http.post<any>(url, params);
  }

  updateArticle(article: ArticleModel) {
    const url = environment.apiGoogle + '/article';

    const params = (
      article
    )
    return this.http.put<any>(url, params);
  }
}
