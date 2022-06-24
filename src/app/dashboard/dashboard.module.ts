import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './users/register/register.component';
import { UserTemplateComponent } from './users/user-template/user-template.component';
import { ListComponent } from './users/list/list.component';
import { RolesComponent } from './users/roles/roles.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
  
    MainComponent,
       RegisterComponent,
       UserTemplateComponent,
       ListComponent,
       RolesComponent,
       BlogComponent,
       PortfolioComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, DashboardRoutingModule
  ],
  exports:[  ]
})
export class DashboardModule { }
