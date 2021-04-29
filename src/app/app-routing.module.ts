import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForumComponent } from './components/forum/forum.component';
import { DetailForumComponent } from './components/forum/detail-forum/detail-forum.component';


const routes: Routes = [
  { path: '', redirectTo: 'forum', pathMatch: 'full' },
  { path: 'forum', component: ForumComponent },
  { path: 'forum/:id', component: DetailForumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
