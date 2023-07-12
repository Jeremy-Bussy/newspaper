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
      title: 'Lorem ipsum dolor sit amet',
      preview: 'Lorem ipsum dolor sit amet...',
      content:
        'Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date_creation: '2022-01-01',
      premium: false,
      visible: true,
      category: 'Sports',
      image: 'https://example.com/image.jpg',
      author: 'John Doe',
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet',
      preview: 'Lorem ipsum dolor sit amet...',
      content:
        'Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date_creation: '2022-01-01',
      premium: false,
      visible: true,
      category: 'Sports',
      image: 'https://example.com/image.jpg',
      author: 'John Doe',
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet',
      preview: 'Lorem ipsum dolor sit amet...',
      content:
        'Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date_creation: '2022-01-01',
      premium: false,
      visible: true,
      category: 'Sports',
      image: 'https://example.com/image.jpg',
      author: 'John Doe',
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet',
      preview: 'Lorem ipsum dolor sit amet...',
      content:
        'Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date_creation: '2022-01-01',
      premium: false,
      visible: true,
      category: 'Sports',
      image: 'https://example.com/image.jpg',
      author: 'John Doe',
    },
    {
      id: 5,
      title: 'Lorem ipsum dolor sit amet',
      preview: 'Lorem ipsum dolor sit amet...',
      content:
        'Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date_creation: '2022-01-01',
      premium: false,
      visible: true,
      category: 'Sports',
      image: 'https://example.com/image.jpg',
      author: 'John Doe',
    },
    {
      id: 6,
      title: 'Lorem ipsum dolor sit amet',
      preview: 'Lorem ipsum dolor sit amet...',
      content:
        'Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date_creation: '2022-01-01',
      premium: false,
      visible: true,
      category: 'Sports',
      image: 'https://example.com/image.jpg',
      author: 'John Doe',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
