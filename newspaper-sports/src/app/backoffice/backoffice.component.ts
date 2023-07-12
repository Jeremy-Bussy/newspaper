import { Component, OnInit } from '@angular/core';
import { ArticleModel } from '../shared/models/article.model';
import { CategoriesModel } from '../shared/models/categories.model';
import { LocalisationModel } from '../shared/models/localisationModel';
import { UserModel } from '../shared/models/user.model';
import { ArticleService } from '../shared/services/article.service';
import { CategoriesService } from '../shared/services/categories.service';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss'],
})
export class BackofficeComponent implements OnInit {
  isLoggedUserAdmin = true;

  article: ArticleModel = new ArticleModel();

  user: UserModel | null = null;

  successSaved = false;

  categoriesList: CategoriesModel[] = [];
  localisation: LocalisationModel = new LocalisationModel;

  constructor(private articleService: ArticleService,
              private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
    console.log(this.user);
    if (this.user && this.user.role !== 3) {
      window.location.href = '/';
    }
    this.categoriesService.getAllCategory().subscribe(
      response => {
        this.categoriesList = response;
      }
    )
  }

  onSubmit() {
    if (this.localisation.x && this.localisation.y) {
      this.article.localisation.push(this.localisation);
    }
    this.article.auteur_id = this.user?.id!;
    console.log(this.article);
    this.articleService.addArticle(this.article).subscribe(
      response => {
        this.successSaved = true;
      }
    )
  }
}
