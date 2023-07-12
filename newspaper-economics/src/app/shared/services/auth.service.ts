import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ArticleModel } from '../models/article.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthModel } from '../models/auth.model';

@Injectable()
export class AuthService {

  header = new HttpHeaders({ "Authorization": "Bearer " + localStorage.getItem('accessToken')});

  constructor(private http: HttpClient) {
  }

  authentificate(email: string, password: string) {
    const url = environment.api + '/auth';

    const params = {
      headers: this.header,
      email,
      password
    };

    return this.http.post<any>(url, params);
  }
  
  select
}
