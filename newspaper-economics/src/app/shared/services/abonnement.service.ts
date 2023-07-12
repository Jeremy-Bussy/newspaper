import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AbonnementService {
  journalId = 3;

  constructor(private http: HttpClient) {
  }

  addAbonnement(abonnement: any) {
    const url = environment.api + '/abonnements ';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));

    abonnement.journal_id = this.journalId;
    const params = {
      users_id: abonnement.users_id,
      journal_id: abonnement.journal_id
    };

    return this.http.post<any>(url, params, {headers});
  }
}
