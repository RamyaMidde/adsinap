import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  main: boolean = true
  service: boolean = false
  services: boolean = false
  contactUs: boolean = false
  whyUs: boolean = false
  aboutUs: boolean = false
  outdoor: boolean = false
  indoor: boolean = false
  promotion: boolean = false
  media: boolean = false
  production: boolean = false
  management: boolean = false
  advertising: boolean = false
  blog: boolean = false
  searchTerm: any;


  search() {
    // Implement your search logic here
    console.log('Searching for:', this.searchTerm);
  }

  Home() {
    this.main = true
    this.media = this.aboutUs =this.service = this.blog = this.whyUs= this.outdoor=this.indoor= this.promotion=this.production=this.advertising=this.management=this.contactUs= false
  }
  Services() {
    this.service = true
    this.main = this.aboutUs =this.media = this.blog = this.whyUs= this.outdoor=this.indoor= this.promotion=this.production=this.advertising=this.management=this.contactUs= false
  }
  WhyUs() {
    this.whyUs = true
    this.main = this.aboutUs =this.service = this.blog = this.media= this.outdoor=this.indoor= this.promotion=this.production=this.advertising=this.management=this.contactUs= false
  }
  About() {
    this.aboutUs = true
    this.main = this.media =this.service = this.blog = this.whyUs= this.outdoor=this.indoor= this.promotion=this.production=this.advertising=this.management=this.contactUs= false
  }
  Contact() {
    this.contactUs = true
    this.main = this.aboutUs =this.service = this.blog = this.whyUs= this.outdoor=this.indoor= this.promotion=this.production=this.advertising=this.management=this.media=false
  }
  outDoor() {
    this.outdoor = true
    this.main = this.aboutUs =this.service = this.blog = this.whyUs= this.media=this.indoor= this.promotion=this.production=this.advertising=this.management= this.contactUs= false
  }
  inDoor() {
    this.indoor = true
    this.main = this.aboutUs =this.service = this.blog = this.whyUs= this.outdoor=this.media= this.promotion=this.production=this.advertising=this.management=this.contactUs=  false
  }
  promotions() {
    this.promotion = true
    this.main = this.aboutUs =this.service = this.blog = this.whyUs= this.outdoor=this.indoor= this.media=this.production=this.advertising=this.management= this.contactUs= false
  }
  printMedia() {
    this.media = true
    this.main = this.aboutUs =this.service = this.blog = this.whyUs= this.outdoor=this.indoor= this.promotion=this.production=this.advertising=this.management=this.contactUs=  false
  }
  productionServices() {
    this.production = true
    this.main = this.aboutUs =this.service = this.blog = this.whyUs= this.outdoor=this.indoor= this.promotion=this.media=this.advertising=this.management=this.contactUs=  false
  }
  eventManagement() {
    this.management = true
    this.main = this.aboutUs =this.service = this.blog = this.whyUs= this.outdoor=this.indoor= this.promotion=this.production=this.advertising=this.media= this.contactUs= false
  }
  signsAdvertising() {
    this.advertising = true
    this.main = this.aboutUs =this.service = this.blog = this.whyUs= this.outdoor=this.indoor= this.promotion=this.production=this.media=this.management= this.contactUs= false
  }

  Blog() {
    this.blog = true
    this.main = this.aboutUs =this.service = this.advertising = this.whyUs= this.outdoor=this.indoor= this.promotion=this.production=this.media=this.management= this.contactUs= false
  }
  Service() {
    this.services = true
    this.main = this.media =this.service = this.blog = this.whyUs= this.outdoor=this.indoor= this.promotion=this.production=this.advertising=this.management=this.contactUs= false
  }

}
