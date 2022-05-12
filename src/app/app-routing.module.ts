import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogEntriesComponent } from './components/blog-entries/blog-entries.component';
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
    path: 'contact', component: ContactComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'security/register', component: RegisterComponent
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
