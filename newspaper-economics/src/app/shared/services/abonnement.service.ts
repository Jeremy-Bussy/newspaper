import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AbonnementService {
  constructor(private http: HttpClient) {
  }

  addAbonnement(abonnement: any) {
    const url = environment.api + '/abonnements';
    const headers: HttpHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));

    const params = {
      users_id: abonnement.users_id,
      journal_id: abonnement.journal_id
    };

    return this.http.post<any>(url, params, {headers});
  }
}
