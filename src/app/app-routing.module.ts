import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { OutdoorComponent } from './outdoor/outdoor.component';
import { IndoorComponent } from './indoor/indoor.component';
import { PromotionsComponent } from './promotions/promotions.component';

const routes: Routes = [
  {
    path:"topbar",
    component:TopbarComponent
  },
  {
    path:'main',
    component:MainComponent
  },
  // {
  //   path:'services',
  //   component:ServiceWorker
  // },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'outdoor',
    component:OutdoorComponent
  },
  {
    path:'indoor',
    component:IndoorComponent
  },
  {
    path:'promotions',
    component:PromotionsComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
