import { Component, OnInit } from '@angular/core';
import { ArticleModel } from '../shared/models/article.model';
import { ArticleService } from '../shared/services/article.service';
import {UserModel} from "../shared/models/user.model";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {

  user?:UserModel;

  articles:ArticleModel[] = [];

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
      categorie: 'Economics',
      image: 'https://example.com/image.jpg',
      auteur: 'John Doe',
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
      categorie: 'Economics',
      image: 'https://example.com/image.jpg',
      auteur: 'John Doe',
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
      categorie: 'Economics',
      image: 'https://example.com/image.jpg',
      auteur: 'John Doe',
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
      categorie: 'Economics',
      image: 'https://example.com/image.jpg',
      auteur: 'John Doe',
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
      categorie: 'Economics',
      image: 'https://example.com/image.jpg',
      auteur: 'John Doe',
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
      categorie: 'Economics',
      image: 'https://example.com/image.jpg',
      auteur: 'John Doe',
      localisation: [],
    },
  ];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    let user = localStorage.getItem('user');
    if(user != null){
      this.user = JSON.parse(user);
      console.log(this.user);
    }


    this.articleService.getAllArticles().subscribe(
      result => {
        this.articles = result;
        console.log(this.articles)
      }
    )
  }
}
