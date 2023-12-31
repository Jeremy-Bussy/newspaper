import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ArticleModel } from '../../models/article.model';

@Component({
  selector: 'app-article-modal',
  templateUrl: './article-modal.component.html',
  styleUrls: ['./article-modal.component.scss'],
})
export class ArticleModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ArticleModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: ArticleModel
  ) {}

  ngOnInit(): void {}
}
