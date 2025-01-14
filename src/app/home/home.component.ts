import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  isModalOpen1: boolean = false;
  isModalOpen2: boolean = false;

  toggleModal1() {
    this.isModalOpen1 = !this.isModalOpen1;
  }
  toggleModal2() {
    this.isModalOpen2 = !this.isModalOpen2;
  }
}
