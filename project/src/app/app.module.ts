import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComponentUsersComponent } from './component-users/component-users.component';
import { StyleComponentComponent } from './style-component/style-component.component';
import { InputComponentComponent } from './input-component/input-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponentUsersComponent,
    StyleComponentComponent,
    InputComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
