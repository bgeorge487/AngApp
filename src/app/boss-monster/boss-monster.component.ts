import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boss-monster',
  templateUrl: './boss-monster.component.html',
  styleUrls: ['./boss-monster.component.css']
})
export class BossMonsterComponent implements OnInit {

  constructor() { }

  bossName: string = "The Demogorgon";
  bossHealth: number = 7570;
  bossAttacks: string[] = ["Multiattack", "Tentacle","Gaze"]

  ngOnInit(): void {
  }

}
