import { Component, Input, OnInit } from '@angular/core';
import { RepositoryService } from '../repository.service';
import { IRace } from '../interfaces/IRace';

@Component({
  selector: 'app-character-race-details',
  templateUrl: './character-race-details.component.html',
  styleUrls: ['./character-race-details.component.css']
})
export class CharacterRaceDetailsComponent implements OnInit {
@Input() index: string = "NA";
  raceDetails: IRace | undefined;

  constructor(private repo: RepositoryService) { }
  
  ngOnInit(): void {
    this.raceDetails = this.repo.getCharacterRaceDetail(this.index);
  }

}


/* 
 ngOnInit(): void {
    this.classDetails = this.repo.getClassDetail(this.index);
  }

*/