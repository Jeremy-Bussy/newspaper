import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export class UserService {
  constructor(private http: HttpClient) {
  }

  checkConnexion(email: string, password: string) {
    const url = environment.api + '/auth';

    const params = {
      email,
      password
    };

    return this.http.post<any>(url, params);
  }

  checkConnexionByGoogle() {
    const url = environment.apiGoogle;

    return this.http.get(url);
  }

  getTokenConnexionGoogle() {
    const url = environment.apiGoogle + '/callback';

    return this.http.get(url);
  }
}