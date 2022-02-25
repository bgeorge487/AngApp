import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { BackstoryComponent } from './backstory/backstory.component';
import { DungeonComponent } from './dungeon/dungeon.component';
import { BossMonsterComponent } from './boss-monster/boss-monster.component';
import { CharacterClassListComponent } from './character-class-list/character-class-list.component';
import { ClassDetailsComponent } from './class-details/class-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    BackstoryComponent,
    DungeonComponent,
    BossMonsterComponent,
    CharacterClassListComponent,
    ClassDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
