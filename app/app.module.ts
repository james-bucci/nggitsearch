import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { AppComponent }  from './app.component';
import { ProfileComponent }  from './components/profile.component';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path : 'profile', component : ProfileComponent },
      { path : '', redirectTo : 'profile', pathMatch : 'full'},
      { path : '**', redirectTo : 'profile', pathMatch : 'full'}
    ])
  ],
  declarations: [ 
    AppComponent,
    ProfileComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
