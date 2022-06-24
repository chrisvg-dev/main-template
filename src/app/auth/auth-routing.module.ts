import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const adminRoutes: Routes = [
    {
        path: '', 
        component: LoginComponent, 
        children: [ 
            { path: 'login', component: LoginComponent }
         ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild( adminRoutes )
    ],exports: [ RouterModule ]
})
export class AuthRoutingModule {}