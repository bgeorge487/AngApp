import { Component, OnInit } from '@angular/core';
import { INpc } from '../interfaces/INpc';
import { NpcrepositoryService } from '../npcrepository.service';

@Component({
  selector: 'app-townspeople',
  templateUrl: './townspeople.component.html',
  styleUrls: ['./townspeople.component.css']
})
export class TownspeopleComponent implements OnInit {

  townsPeople: INpc[] = []

  constructor(private repo: NpcrepositoryService) { }

  ngOnInit(): void {
    this.townsPeople = this.repo.getNpcList();
  }

}
