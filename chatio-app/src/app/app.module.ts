import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {RegisterComponent} from './register/register/register.component';
import {ChangeIconColorDirective} from './page-elm/directives/change-icon-color.directive';
import {CheckpassDirective} from './page-elm/directives/checkpass.directive';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ChangeIconColorDirective,
    CheckpassDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
