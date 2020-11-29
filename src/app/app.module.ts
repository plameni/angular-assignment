import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './components/app/app.component';
import { PostComponent } from './components/post/post.component';
import { PostListComponent } from './components/post-list/post-list.component';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NotifierModule } from "angular-notifier";
import { MainContainerComponent } from './components/main-container/main-container.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    MainContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: "right",
          distance: 200
        },
        vertical: {
          position: "top",
          distance: 50
        }
      },
      behaviour: {
        autoHide: 5000,
        stacking: 5
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
