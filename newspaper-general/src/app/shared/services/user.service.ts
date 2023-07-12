import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserModel } from '../models/user.model';

export class UserService {
  constructor(private http: HttpClient) {
  }

  getUserById(user: UserModel) {
    const url = environment.api + '/user/' + user.id;

    return this.http.get(url);
  }
  checkConnexion(email: string, password: string) {
    const url = environment.api + '/auth';

    const params = {
      email,
      password
    };

    return this.http.post<any>(url, params);
  }

  AddAdmin(user: UserModel) {
    const url = environment.api + '/user/createadmin';

    const params = {
      user
    };

    return this.http.post<any>(url, params);
  }

  updateAdmin(user: UserModel) {
    const url = environment.api + '/user/updateadmin';

    const params = {
      user
    };

    return this.http.put<any>(url, params);
  }
  AddUser(user: UserModel) {
    const url = environment.api + '/user/check';

    const params = {
      user
    };

    return this.http.post<any>(url, params);
  }

  updateUser(user: UserModel) {
    const url = environment.api + '/user/updateuser';

    const params = {
      user
    };

    return this.http.put<any>(url, params);
  }
  
  deleteUser(user:UserModel) {
    const url = environment.api + '/user/' + user.id;
    
    return this.http.delete(url);
  }

  getAllUser() {
    const url = environment.api + '/user/';

    return this.http.get(url);
  }


  checkAdmin(user: UserModel) {
    const url = environment.api + '/user/checkadmin';

    const params = {
      id: user.id
    };

    return this.http.post<any>(url, params);
  }

  checkSubscription(user: UserModel) {
    const url = environment.api + '/user/' + user.id + '/abonnements';
    
    return this.http.get(url);
  }
}