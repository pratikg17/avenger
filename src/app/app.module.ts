import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { GuardiansComponent } from './guardians/guardians.component';
import { AvengersComponent } from './avengers/avengers.component';
import { XmenComponent } from './xmen/xmen.component';
import { FantasticfourComponent } from './fantasticfour/fantasticfour.component';
import { WeaponaryComponent } from './weaponary/weaponary.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GuardiansComponent,
    AvengersComponent,
    XmenComponent,
    FantasticfourComponent,
    WeaponaryComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'guardians', component: GuardiansComponent },
      { path: 'avengers', component: AvengersComponent },
      { path: 'fantastic', component: FantasticfourComponent },
      { path: 'weapons', component: WeaponaryComponent },
      { path: 'xmen', component: XmenComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
