import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentDetailsTableComponent } from './student-details-table/student-details-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentFormComponent,
    StudentDetailsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
