import { Component, OnInit, ViewChild } from '@angular/core';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html'
})
export class GoogleMapComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  ngOnInit() {
    const mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId);
  }
}
