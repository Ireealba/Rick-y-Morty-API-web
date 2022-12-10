import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episode } from '../episode';
import { EpisodeService } from '../episode.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent {

  episode !: Episode;

  constructor( private episodeService:EpisodeService, private activatedRoute:ActivatedRoute){

  }

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(
      e => {
        let id = e['id'];

        if(id){
          this.episodeService.get(id).subscribe(
            ep => this.episode = ep
          );
        }
      }
    );
  }

}
