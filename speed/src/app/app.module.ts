// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSelectModule, MatFormFieldModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ChangeDetectionComponent, CriterionTypeComponent, CriterionValuesComponent, ResultsComponent, SearchComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    ChangeDetectionComponent,
    CriterionTypeComponent, 
    CriterionValuesComponent,
    ResultsComponent,
    SearchComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
