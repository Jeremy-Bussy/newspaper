import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ArticleModel } from '../models/article.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticleService {

  header = new HttpHeaders({ "Authorization": "Bearer " + localStorage.getItem('accessToken')});

  constructor(private http: HttpClient) {
  }

  addArticle(article: ArticleModel): Observable<any> {
    const url = environment.api + '/articles/';

    const params = {
      headers: this.header,
      article
    };

    return this.http.post<any>(url, params);
  }

  updateArticle(article: ArticleModel): Observable<any> {
    const url = environment.api + '/articles/' + article.id;

    const params = {
      headers: this.header,
      article
    };
    return this.http.put<any>(url, params);
  }

  deleteArticle(article: ArticleModel) {
    const url = environment.api + '/articles/' + article.id;

    const params = {
      headers: this.header,
    }

    return this.http.delete(url, params);
  }

  getArticleById(article: ArticleModel): Observable<any> {
    const url = environment.api + '/articles/' + article.id;

    const params = {
      headers: this.header,
    }

    return this.http.get(url, params);
  }

  getAllArticles(): Observable<any> {
    const url = environment.api + '/articles/';

    const params = {
      headers: this.header,
    }

    return this.http.get(url, params);
  }
}
