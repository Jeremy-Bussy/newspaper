import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ArticleModel } from '../models/article.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthModel } from '../models/auth.model';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  authenticate(auth: AuthModel) {
    const url = '/auth';
    
    const params = {
      auth
    };
    
    return this.http.post<any>(url, params);
  }
}