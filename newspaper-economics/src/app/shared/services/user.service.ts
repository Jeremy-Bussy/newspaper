import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  header = new HttpHeaders({ "Authorization": "Bearer " + localStorage.getItem('accessToken')});

  constructor(private http: HttpClient) {
  }

  getUserById(user: UserModel) {
    const url = environment.api + '/user/' + user.id;
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));

    return this.http.get(url, {headers});
  }
  checkConnexion(email: string, password: string) {
    const url = environment.api + '/auth';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));

    const params = {
      email,
      password
    };

    return this.http.post<any>(url, params, {headers});
  }

  AddAdmin(user: UserModel) {
    const url = environment.api + '/user/createadmin';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));

    const params = {
      user
    };

    return this.http.post<any>(url, params, {headers});
  }

  updateAdmin(user: UserModel) {
    const url = environment.api + '/user/updateadmin';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));

    const params = {
      user
    };

    return this.http.put<any>(url, params, {headers});
  }
  AddUser(user: UserModel) {
    const url = environment.api + '/user/check';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));

    const params = {
      user
    };

    return this.http.post<any>(url, params, {headers});
  }

  updateUser(user: UserModel) {
    const url = environment.api + '/user/updateuser';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));

    const params = {
      user
    };

    return this.http.put<any>(url, params, {headers});
  }

  deleteUser(user:UserModel) {
    const url = environment.api + '/user/' + user.id;
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));

    return this.http.delete(url, {headers});
  }

  getAllUser() {
    const url = environment.api + '/user/';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));

    return this.http.get(url, {headers});
  }


  checkAdmin(user: UserModel) {
    const url = environment.api + '/user/checkadmin';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));

    const params = {
      id: user.id
    };

    return this.http.post<any>(url, params, {headers});
  }

  checkSubscription(user: UserModel) {
    const url = environment.api + '/user/' + user.id + '/abonnements';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));

    return this.http.get(url, {headers});
  }
}
