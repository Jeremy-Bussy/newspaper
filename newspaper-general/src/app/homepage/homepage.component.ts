import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../shared/services/article.service';

export interface ArticleCard {
  name: string;
  category: string;
  imageUrl: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  mockupData: ArticleCard[] = [
    {
      name: 'John Doe',
      category: 'News',
      imageUrl: 'https://picsum.photos/seed/picsum/200/300',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui.',
    },
    {
      name: 'John Doe',
      category: 'News',
      imageUrl: 'https://picsum.photos/seed/picsum/200/300',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui.',
    },
    {
      name: 'John Doe',
      category: 'News',
      imageUrl: 'https://picsum.photos/seed/picsum/200/300',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui.',
    },
    {
      name: 'John Doe',
      category: 'News',
      imageUrl: 'https://picsum.photos/seed/picsum/200/300',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui.',
    },
    {
      name: 'John Doe',
      category: 'News',
      imageUrl: 'https://picsum.photos/seed/picsum/200/300',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui.',
    },
  ];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.getAllArticles();
  }

  getAllArticles(): void {
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
