import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogEntriesComponent } from './components/blog-entries/blog-entries.component';
import { BlogEntryComponent } from './components/blog-entry/blog-entry.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { RegisterComponent } from './components/security/register/register.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'portfolio', component: PortfolioComponent
  },
  {
    path: 'blog', component: BlogEntriesComponent
  },
  {
    path: 'blog/entry/:entryId', component: BlogEntryComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'security/register', component: RegisterComponent
  },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
