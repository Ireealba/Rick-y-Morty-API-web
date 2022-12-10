import { Component } from '@angular/core';
import { Location } from './location';
import { LocationService } from './location.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent {

  locations !: Location[];

  constructor( private locationService:LocationService){

  }

  ngOnInit(): void{
    this.locationService.getAll().subscribe(
      l => this.locations = l
    );
  }

}
