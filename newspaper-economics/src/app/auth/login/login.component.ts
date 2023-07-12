import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthModel } from 'src/app/shared/models/auth.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  auth: AuthModel = new AuthModel();

  constructor(private authService: AuthService,private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.authentificate(this.auth.email!, this.auth.password!).subscribe(
      (response: any) => {
        localStorage.setItem('accessToken', response.access_token);
<<<<<<< HEAD
        if (response.user) {
          localStorage.setItem('userId', response.user.id);
          localStorage.setItem('user', JSON.stringify(response.user));
          localStorage.setItem('username', response.user.name);
          window.location.href = '/';
        }
=======
        response.user.password = null;
        localStorage.setItem('user', JSON.stringify(response.user));
        this.router.navigate(['/']);
>>>>>>> b25d98adf670e8f55d86958ff7ee61c61b4ea2fe
      }
    );
  }
  loginGoogle(): void {
    this.authService.selectGoogleAccount().subscribe(
      response => {
        this.authService.getGoogleToken().subscribe(
          (googleReponse: any) => {
            localStorage.setItem('accessToken', googleReponse.access_token);
            if (googleReponse.user) {
              localStorage.setItem('username', googleReponse.user.name);
            }
          }
        )
      }
    )
  }
}
