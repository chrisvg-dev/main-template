import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuComponent } from './components/menu/menu.component';
import { RegisterComponent } from './components/security/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BlogEntriesComponent } from './components/blog-entries/blog-entries.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/partials/skills/skills.component';
import { SliderComponent } from './components/partials/slider/slider.component';
import { CertificationsComponent } from './components/partials/certifications/certifications.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegisterComponent,
    HomeComponent,
    PortfolioComponent,
    BlogEntriesComponent,
    FooterComponent,
    SkillsComponent,
    SliderComponent,
    CertificationsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
