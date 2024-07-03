import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule, formatNumber } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,

    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // Used for components which are rarely used/ no direct way of accessing
  // Will work even without adding it here
  // entryComponents: [StopTrainingComponent],
})
export class AppModule {}
