import { Component, Input, OnInit } from '@angular/core';
import { RepositoryService } from '../repository.service';


@Component({
  selector: 'app-character-race-list',
  templateUrl: './character-race-list.component.html',
  styleUrls: ['./character-race-list.component.css']
})
export class CharacterRaceListComponent implements OnInit {
@Input() index:string = "NA";


  constructor(private repo: RepositoryService) { }

  title: string = "Races Guide";
  characterRaces: any;

  ngOnInit(): void {
    this.repo.getCharacterRaces().subscribe(
      (response) => {this.characterRaces = response}
    )
  }

  //  ngOnInit(): void {
    //this.repo.getCharacterClasses().subscribe(
     // (response) => {this.characterClasses = response;}
    //)
  //}


}
