import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dungeon',
  templateUrl: './dungeon.component.html',
  styleUrls: ['./dungeon.component.css']
})
export class DungeonComponent implements OnInit {

  constructor() { }

  monsters: string[] = ["beholder","chimera","cthulu","abyssal chicken","abjurer"]
  newDungeonName: string = "";

  goldLoot: number = 5000;
  difficultyRating: number = .7;

  showBoss: boolean =false;
  bossButtonText: string ="Show Spoiler";

  ngOnInit(): void {
  }

  getDungeonName(form: NgForm){
    let newDungeonName = form.form.value.dungeonName;
    this.newDungeonName = newDungeonName;
  }

  showBossSpoiler(): void {
    this.showBoss = !this.showBoss;
    if(this.showBoss){
      this.bossButtonText = "Hide Spoiler";
    } else {
      this.bossButtonText = "Show Spoiler";
    }
  }

}
