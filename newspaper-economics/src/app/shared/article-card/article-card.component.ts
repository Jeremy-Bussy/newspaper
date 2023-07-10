import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArticleModalComponent } from './article-modal/article-modal.component';
import { SubscribeModalComponent } from './subscribe-modal/subscribe-modal.component';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnInit {
  @Input() name: string = '';
  @Input() category: string = '';
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() isSubscribed: boolean = false;

  constructor(private dialog: MatDialog) {}

    openArticleDialog() {
    if (this.isSubscribed) {
      const dialogRef = this.dialog.open(ArticleModalComponent, {
        width: '800px',
        data: {
          name: this.name,
          category: this.category,
          imageUrl: this.imageUrl,
          title: this.title,
          content: this.content,
        },
      });
    } else {
      this.openSubscribeDialog();
    }
  }
  openSubscribeDialog() {
    const dialogRef = this.dialog.open(SubscribeModalComponent, {
      width: '800px',
    })
  }

  ngOnInit(): void {}
}
