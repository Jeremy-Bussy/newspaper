import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArticleModalComponent } from './article-modal/article-modal.component';
import { SubscribeModalComponent } from './subscribe-modal/subscribe-modal.component';
import { ArticleModel } from '../models/article.model';
import {UserModel} from "../models/user.model";

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnInit {
  @Input() article: ArticleModel | undefined;
  @Input() isSubscribed: boolean = false;

  constructor(private dialog: MatDialog) {}


  openArticleDialog() {
    let user = localStorage.getItem('user');
    if(user != null){
      let userAuth: UserModel = JSON.parse(user);
      this.isSubscribed = userAuth?.premium || false;
    }
    if (this.isSubscribed || this.article?.premium == false) {
      const dialogRef = this.dialog.open(ArticleModalComponent, {
        width: '800px',
        data: {
          name: this.article?.auteur,
          category: this.article?.categorie,
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
