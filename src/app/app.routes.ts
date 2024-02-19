import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LegalComponent } from './pages/legal/legal.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path : "legal",
        component : LegalComponent

    },
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "**",
        redirectTo: ''
    }
];
