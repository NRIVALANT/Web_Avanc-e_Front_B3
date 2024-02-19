import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { Button2Component } from './components/button2/button2.component';
import { ButtonComponent } from './components/button/button.component';
import { SelectItemComponent } from './components/select-items/select-items.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    Button2Component,
    ButtonComponent,
    SelectItemComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  selectedValue: string = 'tests value'; // Change the type to string

  displaySelectedValue(value: string) {
    this.selectedValue = value;
  }

}
