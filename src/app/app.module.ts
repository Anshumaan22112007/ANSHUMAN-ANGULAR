import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FOOTERComponent } from './footer/footer.component';
import { InputsComponent } from './inputs/inputs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FOOTERComponent,
    InputsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
