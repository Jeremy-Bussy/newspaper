import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ArticleModel } from '../models/article.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthModel } from '../models/auth.model';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  authentificate(email: string, password: string) {
    const url = environment.api + '/auth';

    const params = {
      email,
      password
    };

    return this.http.post<any>(url, params);
  }

  selectGoogleAccount() {
    const url = environment.apiGoogle;

    return this.http.get(url);
  }

  getGoogleToken() {
    const url = environment.apiGoogle + '/callback';

    return this.http.get(url);
  }
}
