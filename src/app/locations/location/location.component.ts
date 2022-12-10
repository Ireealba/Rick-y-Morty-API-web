import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '../location';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {

  location !: Location;

  constructor(private locationService:LocationService, private activatedRoute:ActivatedRoute){

  }

  ngOnInit():void{
    this.activatedRoute.params.subscribe(
      l => {
        let id = l['id'];

        if(id){
          this.locationService.get(id).subscribe(
            lo => this.location = lo
          );
        }
      }
    );
  }

}
