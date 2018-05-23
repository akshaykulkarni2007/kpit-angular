import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  world:String = 'world';
  users:Array<String> = ["Robert", "Dennis", "Patrick", "Sol"];

  addUser(name) {
    this.users.push(name)
  }
}
