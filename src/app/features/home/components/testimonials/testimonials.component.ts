import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      icon: '👥',
      title: '50M+ Customers Served',
      description: 'Millions of customers trust UrbanClone for their home service needs',
    },
    {
      icon: '✅',
      title: 'Verified Professionals',
      description: 'Every professional is background-verified for your safety and peace of mind',
    },
    {
      icon: '🛡️',
      title: '24/7 Customer Support',
      description: 'Our support team is always available to help resolve any issues',
    },
  ];
}
