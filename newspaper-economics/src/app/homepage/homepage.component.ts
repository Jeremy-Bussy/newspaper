import { Component, OnInit } from '@angular/core';
import { ArticleModel } from '../shared/models/article.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  mockupData: ArticleModel[] = [
    {
      id: 1,
      titre: 'Lorem ipsum dolor sit amet',
      preview: 'Lorem ipsum dolor sit amet...',
      corp:
        'Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date_creation: '2022-01-01',
      premium: false,
      visible: true,
      category_name: 'Economics',
      image: 'https://example.com/image.jpg',
      author_name: 'John Doe',
      localisation: [],
    },
    {
      id: 2,
      titre: 'Lorem ipsum dolor sit amet',
      preview: 'Lorem ipsum dolor sit amet...',
      corp:
        'Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date_creation: '2022-01-01',
      premium: false,
      visible: true,
      category_name: 'Economics',
      image: 'https://example.com/image.jpg',
      author_name: 'John Doe',
      localisation: [],
    },
    {
      id: 3,
      titre: 'Lorem ipsum dolor sit amet',
      preview: 'Lorem ipsum dolor sit amet...',
      corp:
        'Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date_creation: '2022-01-01',
      premium: false,
      visible: true,
      category_name: 'Economics',
      image: 'https://example.com/image.jpg',
      author_name: 'John Doe',
      localisation: [],
    },
    {
      id: 4,
      titre: 'Lorem ipsum dolor sit amet',
      preview: 'Lorem ipsum dolor sit amet...',
      corp:
        'Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date_creation: '2022-01-01',
      premium: false,
      visible: true,
      category_name: 'Economics',
      image: 'https://example.com/image.jpg',
      author_name: 'John Doe',
      localisation: [],
    },
    {
      id: 5,
      titre: 'Lorem ipsum dolor sit amet',
      preview: 'Lorem ipsum dolor sit amet...',
      corp:
        'Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date_creation: '2022-01-01',
      premium: false,
      visible: true,
      category_name: 'Economics',
      image: 'https://example.com/image.jpg',
      author_name: 'John Doe',
      localisation: [],
    },
    {
      id: 6,
      titre: 'Lorem ipsum dolor sit amet',
      preview: 'Lorem ipsum dolor sit amet...',
      corp:
        'Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date_creation: '2022-01-01',
      premium: false,
      visible: true,
      category_name: 'Economics',
      image: 'https://example.com/image.jpg',
      author_name: 'John Doe',
      localisation: [],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
