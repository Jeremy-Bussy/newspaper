import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AbonnementService {
  header = new HttpHeaders({ "Authorization": "Bearer " + localStorage.getItem('accessToken')});

  constructor(private http: HttpClient) {
  }

  addAbonnement(abonnement: any) {
    const url = environment.api + '/abonnement';

    const params = {
      headers: this.header,
      abonnement
    };

    return this.http.post<any>(url, params);
  }
}
