import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

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
import { BlogEntryComponent } from './components/blog-entry/blog-entry.component';
import { SpinnerModule } from './shared/components/spinner/spinner.module';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';

import { SpinnerInterceptor } from './shared/interceptors/spinner.interceptor';
import { AboutComponent } from './components/about/about.component';
import { ConstructionComponent } from './shared/components/construction/construction.component';


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
    ContactComponent,
    BlogEntryComponent,
    NotfoundComponent,
    AboutComponent,
    ConstructionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    SpinnerModule    
  ],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
