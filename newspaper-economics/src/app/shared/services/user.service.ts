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

    const params = {
      headers: this.header,
    }

    return this.http.get(url, params);
  }
  checkConnexion(email: string, password: string) {
    const url = environment.api + '/auth';

    const params = {
      headers: this.header,
      email,
      password
    };

    return this.http.post<any>(url, params);
  }

  AddAdmin(user: UserModel) {
    const url = environment.api + '/user/createadmin';

    const params = {
      headers: this.header,
      user
    };

    return this.http.post<any>(url, params);
  }

  updateAdmin(user: UserModel) {
    const url = environment.api + '/user/updateadmin';

    const params = {
      headers: this.header,
      user
    };

    return this.http.put<any>(url, params);
  }
  AddUser(user: UserModel) {
    const url = environment.api + '/user/check';

    const params = {
      headers: this.header,
      user
    };

    return this.http.post<any>(url, params);
  }

  updateUser(user: UserModel) {
    const url = environment.api + '/user/updateuser';

    const params = {
      headers: this.header,
      user
    };

    return this.http.put<any>(url, params);
  }

  deleteUser(user:UserModel) {
    const url = environment.api + '/user/' + user.id;

    const params = {
      headers: this.header,
    }

    return this.http.delete(url, params);
  }

  getAllUser() {
    const url = environment.api + '/user/';

    const params = {
      headers: this.header,
    }

    return this.http.get(url, params);
  }


  checkAdmin(user: UserModel) {
    const url = environment.api + '/user/checkadmin';

    const params = {
      headers: this.header,
      id: user.id
    };

    return this.http.post<any>(url, params);
  }

  checkSubscription(user: UserModel) {
    const url = environment.api + '/user/' + user.id + '/abonnements';

    const params = {
      headers: this.header,
    }

    return this.http.get(url, params);
  }
}
