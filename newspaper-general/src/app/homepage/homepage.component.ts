import { Component, OnInit } from '@angular/core';
import { ArticleModel } from '../shared/models/article.model';
import { ArticleService } from '../shared/services/article.service';

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
      category: 'General',
      imageUrl: 'https://example.com/imageUrl.jpg',
      author: 'John Doe',
      longitude: '0.000000',
      latitude: '0.000000',
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
      category: 'General',
      imageUrl: 'https://example.com/imageUrl.jpg',
      author: 'John Doe',
      longitude: '0.000000',
      latitude: '0.000000',
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
      category: 'General',
      imageUrl: 'https://example.com/imageUrl.jpg',
      author: 'John Doe',
      longitude: '0.000000',
      latitude: '0.000000',
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
      category: 'General',
      imageUrl: 'https://example.com/imageUrl.jpg',
      author: 'John Doe',
      longitude: '0.000000',
      latitude: '0.000000',
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
      category: 'General',
      imageUrl: 'https://example.com/imageUrl.jpg',
      author: 'John Doe',
      longitude: '0.000000',
      latitude: '0.000000',
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
      category: 'General',
      imageUrl: 'https://example.com/imageUrl.jpg',
      author: 'John Doe',
      longitude: '0.000000',
      latitude: '0.000000',
    },
  ];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {

    this.articleService.getAllArticles().subscribe(
      response => {
        console.log(response);
        // this.mockupData = response;
      },
      error => {
        console.log(error);
      }
    );

  }


}
