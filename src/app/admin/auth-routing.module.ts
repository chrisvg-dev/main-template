import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';

const adminRoutes: Routes = [
    {
        path: '', 
        component: MainComponent, 
        children: [ 
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'dashboard', component: LoginComponent }
         ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild( adminRoutes )
    ],exports: [ RouterModule ]
})
export class AuthRoutingModule {}