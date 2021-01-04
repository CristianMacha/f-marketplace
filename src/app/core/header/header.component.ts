import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  open = false;
  display: string;

  constructor() {}

  ngOnInit(): void {
    
  }

  openMenu() {
    const activador = !this.open;
    console.log(activador);
    
    if (activador) {
      this.display = 'none';
    } else {
      this.display = 'block';
    }

    const menu = document.getElementById('menu');
    menu.style.display = this.display;
  }
}
