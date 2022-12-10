import { Component } from '@angular/core';
import { Episode } from './episode';
import { EpisodeService } from './episode.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent {

  episodes !: Episode[];

  constructor(private episodeService:EpisodeService){

  }

  ngOnInit():void{
    this.episodeService.getAll().subscribe(
      e => this.episodes = e
    );
  }

}
