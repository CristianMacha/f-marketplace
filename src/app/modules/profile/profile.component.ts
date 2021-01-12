import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { IPerson } from '../../core/interfaces/auth.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  person: IPerson = {
    names: '',
    email: '',
    photo: '',
    sexo: true,
    surnames: '',
  };
  constructor(private authServices: AuthenticationService) {}

  ngOnInit(): void {
    this.getAuthPerson();
  }

  getAuthPerson() {
    this.authServices.getUserLogged().subscribe(
      (data) => (this.person = data),
      (error) => console.error(error)
    );
  }
}
