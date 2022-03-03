import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BossMonstersModule } from './boss-monsters/boss-monsters.module';
import { NpcsModule } from './npcs/npcs.module';
import { CoreModule } from './core/core.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { BackstoryComponent } from './backstory/backstory.component';
import { DungeonComponent } from './dungeon/dungeon.component';
import { BossMonsterComponent } from './boss-monster/boss-monster.component';
import { CharacterClassListComponent } from './character-class-list/character-class-list.component';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { CharacterRaceListComponent } from './character-race-list/character-race-list.component';
import { CharacterRaceDetailsComponent } from './character-race-details/character-race-details.component';
import { BosslistComponent } from './boss-monsters/bosslist/bosslist.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'character', component: CharacterComponent},
  {path:'class', component: CharacterClassListComponent},
  {path:'boss', component: BosslistComponent},
  {path:'', redirectTo: '/class', pathMatch: 'full'},
  {path:'**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    BackstoryComponent,
    DungeonComponent,
    BossMonsterComponent,
    CharacterClassListComponent,
    ClassDetailsComponent,
    CharacterRaceListComponent,
    CharacterRaceDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BossMonstersModule,
    NpcsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
