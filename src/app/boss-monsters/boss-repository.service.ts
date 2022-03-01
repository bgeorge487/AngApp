import { Injectable } from '@angular/core';
import { IBossMonster } from './interfaces/IBossMonster';

@Injectable({
  providedIn: 'root'
})
export class BossRepositoryService {

  constructor() { }

  getBossMonsters(): IBossMonster[]{
    return [
      {id: 1, name:"Booth Stomper", healthPoints: 200, weakness:"fire"},
      {id: 2, name:"Drog Fisher", healthPoints: 250, weakness:"ice"},
      {id: 3, name:"Trogdore", healthPoints: 500, weakness:"fists"}
    ]
  }


}
