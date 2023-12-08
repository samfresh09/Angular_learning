import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { BodyComponent } from './main/body/body.component';
import { FooterComponent } from './main/footer/footer.component';
import { HeaderSectionComponent } from './main/header/header-section/header-section.component';
import { SliderSectionComponent } from './main/header/slider-section/slider-section.component';
import { AproposSessionComponent } from './main/body/apropos-session/apropos-session.component';
import { NouveauteSessionComponent } from './main/body/nouveaute-session/nouveaute-session.component';
import { NosProduitsSessionComponent } from './main/body/nos-produits-session/nos-produits-session.component';
import { SouscriptionSessionComponent } from './main/body/souscription-session/souscription-session.component';
import { TemoignageSessionComponent } from './main/body/temoignage-session/temoignage-session.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HeaderSectionComponent,
    SliderSectionComponent,
    AproposSessionComponent,
    NouveauteSessionComponent,
    NosProduitsSessionComponent,
    SouscriptionSessionComponent,
    TemoignageSessionComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
