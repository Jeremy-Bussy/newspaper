import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ArticleModel } from '../models/article.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {

  constructor(private http: HttpClient) {
  }

  addCategory(category: any): Observable<any> {
    const url = environment.api + '/categories/';

    const params = {
      category
    };

    return this.http.post<any>(url, params);
  }

  updateCategory(category: any): Observable<any> {
    const url = environment.api + '/categories/' + category.id;

    const params = (
      category
    )
    return this.http.put<any>(url, params);
  }

  deleteCategory(category: any) {
    const url = environment.api + '/categories/' + category.id;

    return this.http.delete(url);
  }

  getCategoryById(id: number): Observable<any> {
    const url = environment.api + '/categories/' + id;

    return this.http.get(url);
  }

  getAllCategory(): Observable<any> {
    const url = environment.api + '/categories/';

    return this.http.get(url);
  }
}
