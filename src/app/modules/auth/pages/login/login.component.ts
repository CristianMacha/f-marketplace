import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../core/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authServices: AuthenticationService) {}

  ngOnInit(): void {
    this.signin();
  }

  signin() {
    this.authServices.signin().subscribe((data) => console.log(data));
  }
}
