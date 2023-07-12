import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArticleModalComponent } from './article-modal/article-modal.component';
import { SubscribeModalComponent } from './subscribe-modal/subscribe-modal.component';
import { ArticleModel } from '../models/article.model';
import {UserModel} from "../models/user.model";
import {ArticleService} from "../services/article.service";

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnInit {
  @Input() article: ArticleModel | undefined;
  @Input() isSubscribed: boolean = false;

  constructor(private dialog: MatDialog,private articleService: ArticleService) {}


  openArticleDialog() {
    this.articleService.getArticleById(this.article || new ArticleModel()).subscribe({
        next: any => {
          this.dialog.open(ArticleModalComponent, {
            width: '800px',
            data: {
              name: this.article?.auteur,
              category: this.article?.categorie,
              image: this.article?.image,
              title: this.article?.titre,
              content: this.article?.corp,
            },
          });
        },
        error: any => {
          this.openSubscribeDialog();
        }
      }
    )
  }

  openSubscribeDialog() {
    const dialogRef = this.dialog.open(SubscribeModalComponent, {
      width: '800px',
    });
  }

  ngOnInit(): void {}
}
