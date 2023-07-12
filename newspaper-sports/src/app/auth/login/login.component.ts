import { Component, OnInit } from '@angular/core';
import { AuthModel } from 'src/app/shared/models/auth.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  auth: AuthModel = new AuthModel();
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.authenticate(this.auth).subscribe(
      (response: any) => {
        console.log(response);
        localStorage.setItem('accessToken', response.access_token);
        localStorage.setItem('username', response.user.name);
      }
    )
  }
  loginGoogle(): void {
    
  }

  onSubmit(auth: AuthModel) {
    console.log(auth);
  }
}