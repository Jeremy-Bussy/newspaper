import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ArticleModel } from '../models/article.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {
  header = new HttpHeaders({ "Authorization": "Bearer " + localStorage.getItem('accessToken')});

  constructor(private http: HttpClient) {
  }

  addCategory(category: any): Observable<any> {
    const url = environment.api + '/categories/';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));

    const params = {
      category
    };

    return this.http.post<any>(url, params, {headers});
  }

  updateCategory(category: any): Observable<any> {
    const url = environment.api + '/categories/' + category.id;
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));

    const params = {
      category
    }
    return this.http.put<any>(url, params, {headers});
  }

  deleteCategory(category: any) {
    const url = environment.api + '/categories/' + category.id;
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));

    return this.http.delete(url, {headers});
  }

  getCategoryById(id: number): Observable<any> {
    const url = environment.api + '/categories/' + id;
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));

    return this.http.get(url, {headers});
  }

  getAllCategory(): Observable<any> {
    const url = environment.api + '/categories/';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));

    return this.http.get(url, {headers});
  }
}
