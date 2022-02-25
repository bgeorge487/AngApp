import { not } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
@Input() name ="Unknown";
@Input() type ="Peasant";
  constructor() { }

  weapons: string[] = ["rags","sturdy stick","flagon of water"]

  goldAmount:number = 100;
  healthPercent: number = .75;


  ngOnInit(): void {

    if(this.type === "bard"){
      this.weapons = ["lute", "wine"];
    } else if (this.type === "fighter"){
      this.weapons = ["Dagger","Bow","Auiver of Arrows","Mage Staff"];
    } else if (this.type === "Peasant") {
      this.weapons = this.weapons;
    }

  }


}
