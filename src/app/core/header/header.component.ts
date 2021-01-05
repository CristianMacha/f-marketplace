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

  ngOnInit(): void {}

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
}
