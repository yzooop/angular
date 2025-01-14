import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  title = 'angular12';
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  isVisible: boolean = false;

  toggleDiv(): void {
    this.isVisible = !this.isVisible;
  }
}


