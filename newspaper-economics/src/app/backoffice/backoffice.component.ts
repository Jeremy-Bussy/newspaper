import { Component, OnInit } from '@angular/core';

export interface Article {
  title: string;
  content: string;
  tags: string[];
  image: string;
  gpsStreetMapTag: string;
}

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss'],
})
export class BackofficeComponent implements OnInit {
  isLoggedUserAdmin = true;

  constructor() {}

  article: Article = {
    title: '',
    content: '',
    tags: [],
    image: '',
    gpsStreetMapTag: '',
  };

  ngOnInit(): void {}
}
