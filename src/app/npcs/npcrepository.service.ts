import { Injectable } from '@angular/core';
import { INpc } from './interfaces/INpc';

@Injectable({
  providedIn: 'root'
})
export class NpcrepositoryService {

  constructor() { }

  getNpcList(): INpc[]{
    return [
      {id: 1, name:"Jeff", profession: "Smithy", isAnAlly: true},
      {id: 2, name:"Karen", profession: "Housewife", isAnAlly: false},
      {id: 3, name:"Bismuth", profession: "Merchant", isAnAlly: false},
      {id: 4, name:"Clyde", profession: "Cobbler", isAnAlly: true},
      {id: 5, name:"Wilhelm", profession: "Drunkard", isAnAlly: false},
    ]
  }

}
