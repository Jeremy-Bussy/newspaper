import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ArticleCardComponent } from './shared/article-card/article-card.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ArticleModalComponent } from './shared/article-card/article-modal/article-modal.component';
import { LoginComponent } from './auth/login/login.component';
import { SubscribeModalComponent } from './shared/article-card/subscribe-modal/subscribe-modal.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { UserListComponent } from './backoffice/user-list/user-list.component';
import { ArticleService } from '../app/shared/services/article.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ArticleCardComponent,
    FooterComponent,
    ArticleModalComponent,
    LoginComponent,
    SubscribeModalComponent,
    BackofficeComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
