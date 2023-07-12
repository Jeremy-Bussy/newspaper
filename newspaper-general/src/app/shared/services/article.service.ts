import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ArticleModel } from '../models/article.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  addArticle(article: ArticleModel): Observable<any> {
    const url = environment.api + '/articles/';

    const params = {
      article
    };

    return this.http.post<any>(url, params);
  }

  updateArticle(article: ArticleModel): Observable<any> {
    const url = environment.api + '/articles/' + article.id;

    const params = (
      article
    )
    return this.http.put<any>(url, params);
  }

  deleteArticle(article: ArticleModel) {
    const url = environment.api + '/articles/' + article.id;

    return this.http.delete(url);
  }

  getArticleById(article: ArticleModel): Observable<any> {
    const url = environment.api + '/articles/' + article.id;

    return this.http.get(url);
  }

  getAllArticles(): Observable<any> {
    const url = environment.api + '/articles/';

    return this.http.get(url);
  }
}
