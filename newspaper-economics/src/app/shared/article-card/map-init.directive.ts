import { Directive, ElementRef, Input, OnInit } from '@angular/core';
// import * as L from 'leaflet';

@Directive({
  selector: '[appMapInit]'
})
export class MapInitDirective implements OnInit {
  @Input() latitude: number = 0;
  @Input() longitude: number = 0;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // const mapOptions: L.MapOptions = {
    //   center: [this.latitude, this.longitude],
    //   zoom: 15
    // };
    //
    // const map = L.map(this.elementRef.nativeElement, mapOptions);
    //
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: 'Map data &copy; OpenStreetMap contributors'
    // }).addTo(map);
    //
    // L.marker([this.latitude, this.longitude]).addTo(map);
  }
}
