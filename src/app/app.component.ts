import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'D & D';
  usersName: string ="";
  components: string[] = ["Character","Gear","Monster", "Dungeon"]; 


 changeTitle(newTitle: string) : void {
  this.title = newTitle;
  }

  addComponent(form: NgForm){
    let newComponent = form.form.value.name;
    this.components.push(newComponent);
  }

  getUserName(form: NgForm){
    let newName = form.form.value.name;
    this.usersName = `, ${newName}`;
  }
}
