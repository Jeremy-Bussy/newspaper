import { Component, OnInit } from '@angular/core';
import { ArticleModel } from '../shared/models/article.model';
import { ArticleService } from '../shared/services/article.service';
import {UserModel} from "../shared/models/user.model";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {

  user?:UserModel;

  articles:ArticleModel[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    let user = localStorage.getItem('user');
    if(user != null){
      this.user = JSON.parse(user);
      console.log(this.user);
    }


    this.articleService.getAllArticles().subscribe(
      result => {
        this.articles = result;
        console.log(this.articles)
      }
    )
  }
}
