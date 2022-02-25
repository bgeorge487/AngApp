import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClass } from './interfaces/IClass';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  classList: IClass[] =[
    {index: "barbarian",name:"Barb",healthPoints:50,mainWeapon: "war hammer"},
    {index: "bard",name:"Darius",healthPoints:30,mainWeapon: "lute"},
    {index: "fighter",name:"Karen",healthPoints:60,mainWeapon: "fists"}
  ]

  private apiUri: string = "https://www.dnd5eapi.co/api/classes";


  constructor(private http: HttpClient) { }
  

  getCharacterClasses(){
    return this.http.get(this.apiUri);
  }

  getClassDetail(index:string){
    return this.classList.find(c => c.index === index)
  }
}
