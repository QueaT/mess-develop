import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register/register.component';
import {MainSideComponent} from './main-side/main-side.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', component: RegisterComponent},
    {path: 'chatio', component: MainSideComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
