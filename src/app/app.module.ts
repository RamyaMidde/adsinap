import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { OutdoorComponent } from './outdoor/outdoor.component';
import { IndoorComponent } from './indoor/indoor.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { BottomComponent } from './bottom/bottom.component';
import { MediaComponent } from './media/media.component';
import { ProductionComponent } from './production/production.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { ManagementComponent } from './management/management.component';
import { ClientsComponent } from './clients/clients.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    MainComponent,
    AboutComponent,
    ContactComponent,
    OutdoorComponent,
    IndoorComponent,
    PromotionsComponent,
    BottomComponent,
    MediaComponent,
    ProductionComponent,
    AdvertisingComponent,
    ManagementComponent,
    ClientsComponent,
    ServicesComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
