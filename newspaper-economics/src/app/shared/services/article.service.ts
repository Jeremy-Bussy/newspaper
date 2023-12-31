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
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));

    const params = {
      titre: article.titre,
      corp: article.corp,
      image: article.image,
      auteur_id: article.auteur_id,
      premium: article.premium,
      visible: article.visible,
      categorie_id: article.categorie_id,
      localisation: article.localisation,
    };

    return this.http.post<any>(url, params, {headers});
  }

  updateArticle(article: ArticleModel): Observable<any> {
    const url = environment.api + '/articles/' + article.id;
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));

    const params = {
      titre: article.titre,
      corp: article.corp,
      image: article.image,
      auteur_id: article.auteur_id,
      premium: article.premium,
      visible: article.visible,
      categorie_id: article.categorie_id,
      localisation: article.localisation,
    };

    return this.http.put<any>(url, params, {headers});
  }

  deleteArticle(article: ArticleModel) {
    const url = environment.api + '/articles/' + article.id;
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));

    return this.http.delete(url, {headers});
  }

  getArticleById(article: ArticleModel): Observable<any> {
    const url = environment.api + '/articles/' + article.id;
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));

    return this.http.get(url, {headers});
  }

  getAllArticles(): Observable<any> {
    const url = environment.api + '/journaux/'+ environment.journalid +'/articles';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));

    return this.http.get(url, {headers});
  }
}
