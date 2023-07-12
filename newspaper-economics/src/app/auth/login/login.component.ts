import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string | null = null;
  password: string | null = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.authentificate(this.email!, this.password!).subscribe(
      response => {
        console.log(response);
        localStorage.setItem('accessToken', response.access_token);
        localStorage.setItem('username', response.user.name);
      }
    );
  }
  loginGoogle(): void {

  }
}
