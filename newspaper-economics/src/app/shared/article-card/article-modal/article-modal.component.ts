import {
  Component,
  OnInit,
  Inject,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ArticleModel, LocalisationModel } from '../../models/article.model';
import * as L from 'leaflet';

@Component({
  selector: 'app-article-modal',
  templateUrl: './article-modal.component.html',
  styleUrls: ['./article-modal.component.scss'],
})
export class ArticleModalComponent implements OnInit, AfterViewInit {
  map!: L.Map;
  mapContainer!: HTMLElement;

  constructor(
    public dialogRef: MatDialogRef<ArticleModalComponent>,
    @Inject(MAT_DIALOG_DATA) public article: ArticleModel,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.mapContainer =
      this.elementRef.nativeElement.querySelector('.map-container');
    this.initializeMap();
  }

  initializeMap(): void {
    this.map = L.map(this.mapContainer).setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
      tileSize: 256,
      zoomOffset: 0,
    }).addTo(this.map);

    if (this.article.localisation) {
      for (const location of this.article.localisation) {
        const x = location.x ?? 0; // Assigns 0 if location.x is null
        const y = location.y ?? 0; // Assigns 0 if location.y is null
        L.marker([x, y]).addTo(this.map);
      }
    }
  }
}
