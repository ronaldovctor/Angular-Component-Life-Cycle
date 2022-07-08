import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { MainLifeCycleComponent } from './components/main-life-cycle/main-life-cycle.component';
import { LifeCycleChildComponent } from './components/main-life-cycle/life-cycle-child/life-cycle-child.component';
import { ChildChildComponent } from './components/main-life-cycle/life-cycle-child/child-child/child-child.component';
import { CheckComponent } from './components/check/check.component';
import { CheckChildComponent } from './components/check/check-child/check-child.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLifeCycleComponent,
    LifeCycleChildComponent,
    ChildChildComponent,
    CheckComponent,
    CheckChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
