import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  //Interpolation
  username:string = 'User';

  //Two-way binding
  userInput: string = '';

  //Event binding example
  sayHello() {
    alert(`Hello, ${this.username!}`);
  }

  onUsernameInput(event: Event) :void {
    this.username = (event.target as HTMLInputElement).value;
  }
  
}
