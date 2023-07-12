import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArticleModalComponent } from './article-modal/article-modal.component';
import { SubscribeModalComponent } from './subscribe-modal/subscribe-modal.component';
import { ArticleModel } from '../models/article.model';

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
    if (this.isSubscribed) {
      const dialogRef = this.dialog.open(ArticleModalComponent, {
        width: '800px',
        data: {
          name: this.article?.author,
          category: this.article?.category,
          image: this.article?.image,
          title: this.article?.title,
          content: this.article?.content,
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
