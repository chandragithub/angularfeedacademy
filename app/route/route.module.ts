import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularFeedMainHomeComponent } from '../common/home/home.component';
import { ProfilesComponent } from '../profiles/profiles.component';
import { ContactComponent } from '../contact/contact.component';

// articles component routing
import { ArticleComponent } from '../article/article.component';
import { ArticleHomeComponent } from '../article/article-home/article-home.component';

// tutorials component routing
import { TutorialComponent } from '../tutorial/tutorial.component';
import { TechnologyComponent } from '../tutorial/technology/technology.component';

// training component routing
import { TrainingComponent } from '../training/training.component';

// books component routing
import { BooksComponent } from '../books/books.component';
 
const routes: Routes = [
      { path: '', pathMatch: 'full', component: AngularFeedMainHomeComponent},
      { path: 'blog', component: ArticleComponent },
      { path: 'blog/:id', component: ArticleHomeComponent},
      { path: 'tutorials', component: TutorialComponent },
      { path: 'tutorials/:id1/:id2', component: TechnologyComponent },
      { path: 'courses', component: TrainingComponent},
      { path: 'books', component: BooksComponent},
      { path: 'profile/:id', component: ProfilesComponent},
      { path: 'contact', component: ContactComponent},
      { path: '**', redirectTo: '', component: AngularFeedMainHomeComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
  declarations: []
})
export class RouteModule { }