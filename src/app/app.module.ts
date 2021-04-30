import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MomentPipesModule } from 'ng-moment-pipes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotifierModule } from "angular-notifier";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
    MomentPipesModule,
    NotifierModule.withConfig({
      behaviour: {
        autoHide: 5000,
        stacking: 4
      },
      position: {
        vertical: {
          position: 'bottom'
        },
        horizontal: {
          position: 'right'
        }
      },
      theme: 'material'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
