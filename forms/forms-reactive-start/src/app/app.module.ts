import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// forms module is needed for template driven approach
//import { FormsModule } from '@angular/forms';
// for reactive use this
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
