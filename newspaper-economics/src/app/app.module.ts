import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ArticleCardComponent } from './shared/article-card/article-card.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ArticleModalComponent } from './shared/article-card/article-modal/article-modal.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { UserListComponent } from './backoffice/user-list/user-list.component';
import { LoginComponent } from './auth/login/login.component';
import { SubscribeModalComponent } from './shared/article-card/subscribe-modal/subscribe-modal.component';
import { MapInitDirective } from './shared/article-card/map-init.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ArticleCardComponent,
    FooterComponent,
    ArticleModalComponent,
    BackofficeComponent,
    UserListComponent,
    LoginComponent,
    SubscribeModalComponent,
    MapInitDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
