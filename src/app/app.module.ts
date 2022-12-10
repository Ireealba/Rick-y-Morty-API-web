import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CharactersComponent } from './characters/characters.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationsComponent } from './locations/locations.component';
import { EpisodesComponent } from './episodes/episodes.component';

const routes:Routes=[
  {path:'', redirectTo:'/rickandmorty', pathMatch:'full'},
  {path:'rickandmorty', component:DashboardComponent},
  {path:'rickandmorty/characters', component:CharactersComponent},
  {path:'rickandmorty/locations', component:LocationsComponent},
  {path:'rickandmorty/episodes', component:EpisodesComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    DashboardComponent,
    LocationsComponent,
    EpisodesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
