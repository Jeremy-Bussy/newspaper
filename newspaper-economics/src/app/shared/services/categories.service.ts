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

    const params = {
      headers: this.header,
      category
    };

    return this.http.post<any>(url, params);
  }

  updateCategory(category: any): Observable<any> {
    const url = environment.api + '/categories/' + category.id;

    const params = {
      headers: this.header,
      category
    }
    return this.http.put<any>(url, params);
  }

  deleteCategory(category: any) {
    const url = environment.api + '/categories/' + category.id;

    const params = {
      headers: this.header,
    }

    return this.http.delete(url, params);
  }

  getCategoryById(id: number): Observable<any> {
    const url = environment.api + '/categories/' + id;

    const params = {
      headers: this.header,
    }

    return this.http.get(url, params);
  }

  getAllCategory(): Observable<any> {
    const url = environment.api + '/categories/';

    const params = {
      headers: this.header,
    }

    return this.http.get(url, params);
  }
}
