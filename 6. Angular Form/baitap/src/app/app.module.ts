import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponentComponent,
    ListUserComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
