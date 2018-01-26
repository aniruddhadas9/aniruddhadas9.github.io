import {Component, OnInit} from '@angular/core';
import {GoogleMap} from '@agm/core/services/google-maps-types';
import {MapService} from './core/services/map.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'ani-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  coordinates: Coordinates;
  title = 'Aniruddha Das';

  constructor(private httpClient: HttpClient,
              private mapService: MapService) {
  }

  ngOnInit() {
  }

  mapReady(map: GoogleMap) {
    this.mapService.map = map;
    this.mapService.getLocation({}).subscribe((position: Position) => {
      this.coordinates = position && position.coords;
      this.mapService.getUserLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }).subscribe((location) => {
      });
    });
  }

}
