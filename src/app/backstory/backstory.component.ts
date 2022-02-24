import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backstory',
  templateUrl: './backstory.component.html',
  styleUrls: ['./backstory.component.css']
})
export class BackstoryComponent implements OnInit {

  constructor() { }
  homeTown: string = "Narnia";
  profession: string = "farmer";
  petName: string = "Spot";
  petSpecies: string = "Dinosaur";
  hobbyName: string = "Sewing";
  newCity: string ="Las Vegas";
  numberOfYears: number = 16;

  ngOnInit(): void {
  }

}
