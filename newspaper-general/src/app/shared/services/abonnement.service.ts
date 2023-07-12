import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export class AbonnementService {
  constructor(private http: HttpClient) {
  }

  addAbonnement(abonnement: any) {
    const url = environment.api + '/abonnement';

    const params = {
      abonnement
    };

    return this.http.post<any>(url, params);
  }
}
