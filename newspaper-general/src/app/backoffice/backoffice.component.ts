import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../shared/services/article.service';
import { ArticleModel } from '../shared/models/article.model';
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

  articleTest = new ArticleModel();
  constructor(private articleService: ArticleService) {}

  article: Article = {
    title: '',
    content: '',
    tags: [],
    image: '',
    gpsStreetMapTag: '',
  };

  ngOnInit(): void {}

  onPublish(): void {
    this.articleService.addArticle(this.articleTest);
  }
}
