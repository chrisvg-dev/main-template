import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { BlogComponent } from './blog/blog.component';
import { MainComponent } from './main/main.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RolesComponent } from './users/roles/roles.component';
import { UserTemplateComponent } from './users/user-template/user-template.component';

const adminRoutes: Routes = [
    {
        path: '', 
        component: MainComponent, 
        children: [ 
            { path: 'users', component: UserTemplateComponent },
            { path: 'roles', component: RolesComponent },
            { path: 'blog', component: BlogComponent },
            { path: 'portfolio', component: PortfolioComponent },
         ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild( adminRoutes )
    ],exports: [ RouterModule ]
})
export class DashboardRoutingModule {}