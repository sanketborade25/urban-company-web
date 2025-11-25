import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeroComponent } from './home-hero.component';
import { HomeCategoriesComponent } from './home-categories.component';
import { HomePopularServicesComponent } from './home-popular-services.component';
import { HomeHowItWorksComponent } from './home-how-it-works.component';
import { HomeTestimonialsComponent } from './home-testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HomeHeroComponent,
    HomeCategoriesComponent,
    HomePopularServicesComponent,
    HomeHowItWorksComponent,
    HomeTestimonialsComponent,
  ],
  template: `
    <app-home-hero></app-home-hero>
    <app-home-categories></app-home-categories>
    <app-home-popular-services></app-home-popular-services>
    <app-home-how-it-works></app-home-how-it-works>
    <app-home-testimonials></app-home-testimonials>
  `,
  styles: [],
})
export class HomeComponent {}
