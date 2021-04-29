import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MomentPipesModule } from 'ng-moment-pipes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForumComponent } from './components/forum/forum.component';
import { DetailForumComponent } from './components/forum/detail-forum/detail-forum.component';

@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    DetailForumComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MomentPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
