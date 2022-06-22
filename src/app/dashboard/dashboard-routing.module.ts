import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from './main/main.component';
import { RolesComponent } from './users/roles/roles.component';
import { UserTemplateComponent } from './users/user-template/user-template.component';

const adminRoutes: Routes = [
    {
        path: '', 
        component: MainComponent, 
        children: [ 
            { path: 'users', component: UserTemplateComponent },
            { path: 'roles', component: RolesComponent }
         ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild( adminRoutes )
    ],exports: [ RouterModule ]
})
export class DashboardRoutingModule {}