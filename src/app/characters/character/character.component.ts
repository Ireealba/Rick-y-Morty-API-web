import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  character !: Character;

  constructor( private characterService:CharacterService, private activatedRoute:ActivatedRoute){

  }

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(
      c => {
        let id = c['id'];

        if(id){
          this.characterService.get(id).subscribe(
            ch => this.character = ch
          );
        }
      }
    );
  }
}
