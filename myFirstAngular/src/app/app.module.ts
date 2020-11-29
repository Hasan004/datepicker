import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { Opdracht2Component } from './opdracht2/opdracht2.component';
import { HttpClientModule } from '@angular/common/http';

let routes: Routes = [
  { path: 'labs', component: AppComponent},
  { path: 'welcome', component: AppComponent},
  { path: 'add', component: ContactFormComponent},
  { path: 'list', component: DatepickerComponent},
  { path: 'edit/:id', component: ServerComponent},
  { path: 'opdracht2', component: Opdracht2Component}
];

@NgModule({
  declarations: [
    MainPageComponent,
    AppComponent,
    ServerComponent,
    DatepickerComponent,
    ContactFormComponent,
    Opdracht2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [MainPageComponent]
})
export class AppModule { }
