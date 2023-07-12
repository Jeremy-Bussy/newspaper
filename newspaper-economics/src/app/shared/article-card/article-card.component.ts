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
  @Input() isSubscribed: boolean = true;

  constructor(private dialog: MatDialog,private articleService: ArticleService) {}


  openArticleDialog() {
    if (this.isSubscribed) {
      const dialogRef = this.dialog.open(ArticleModalComponent, {
        width: '800px',
        data: {
          name: this.article?.auteur_name,
          category: this.article?.categorie_name,
          image: this.article?.image,
          title: this.article?.titre,
          content: this.article?.corp,
        },
      });
    } else {
      this.openSubscribeDialog();
    }
  }


  openSubscribeDialog() {
    const dialogRef = this.dialog.open(SubscribeModalComponent, {
      width: '800px',
    });
  }

  ngOnInit(): void {}
}
