import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { IPerson } from '../interfaces/auth.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  open = false;
  display: string;

  person: IPerson = {
    names: '',
    email: '',
    photo: '',
    sexo: true,
    surnames: '',
  };

  constructor(public authServices: AuthenticationService) {}

  ngOnInit(): void {
    if (this.authServices.isAuth()) {
      this.getAuthPerson();
    }
  }

  openMenu(position: number) {
    this.open = !this.open;

    if (this.open) {
      this.display = 'block';
    } else {
      this.display = 'none';
    }

    const menu = document.getElementById(`menu${position}`);
    menu.style.display = this.display;
  }

  getAuthPerson() {
    this.authServices.getUserLogged().subscribe(
      (data) => (this.person = data),
      (error) => console.error(error)
    );
  }

  logOut(position: number) {
    this.authServices.logOut();
    this.openMenu(position);
  }
}
