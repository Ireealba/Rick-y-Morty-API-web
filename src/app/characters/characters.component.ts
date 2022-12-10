import { Component } from '@angular/core';
import { Character } from './character';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  characters !: Character[];

  constructor( private characterService:CharacterService ){

  }

  ngOnInit(): void{
    this.characterService.getAll().subscribe(
      c => this.characters = c
    );
  }
  
}
