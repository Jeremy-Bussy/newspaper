import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArticleModalComponent } from './article-modal/article-modal.component';

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

  constructor(private dialog: MatDialog) {}

  openArticleDialog() {
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
  }

  ngOnInit(): void {}
}
