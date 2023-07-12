import { Component, OnInit } from '@angular/core';
import { ArticleModel } from '../shared/models/article.model';
import { ArticleService } from '../shared/services/article.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  mockupData: ArticleModel[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getAllArticles().subscribe(
      response => {
        this.mockupData = response;
      }
    )
  }
}
