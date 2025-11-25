import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ServiceCategory, ServiceItem } from '../../shared/models/service.model';

@Injectable({
  providedIn: 'root',
})
export class HomeDataService {
  private categories: ServiceCategory[] = [
    {
      id: 1,
      name: 'Cleaning',
      description: 'Professional home & office cleaning',
      icon: '🧹',
    },
    {
      id: 2,
      name: 'Plumber',
      description: 'Expert plumbing services',
      icon: '🔧',
    },
    {
      id: 3,
      name: 'Electrician',
      description: 'Electrical repairs & installation',
      icon: '⚡',
    },
    {
      id: 4,
      name: 'Salon at Home',
      description: 'Beauty & grooming at your doorstep',
      icon: '💅',
    },
    {
      id: 5,
      name: 'Painting',
      description: 'Interior & exterior painting',
      icon: '🎨',
    },
    {
      id: 6,
      name: 'Appliance Repair',
      description: 'Fix your home appliances',
      icon: '🔌',
    },
  ];

  private popularServices: ServiceItem[] = [
    {
      id: 1,
      name: 'Home Deep Cleaning',
      categoryId: 1,
      startingPrice: 89,
      rating: 4.8,
      description: 'Thorough cleaning of your entire home',
    },
    {
      id: 2,
      name: 'Leak Repair',
      categoryId: 2,
      startingPrice: 75,
      rating: 4.9,
      description: 'Fix water leaks quickly and efficiently',
    },
    {
      id: 3,
      name: 'Ceiling Fan Installation',
      categoryId: 3,
      startingPrice: 60,
      rating: 4.7,
      description: 'Safe installation of ceiling fans',
    },
    {
      id: 4,
      name: 'Haircut & Styling',
      categoryId: 4,
      startingPrice: 40,
      rating: 4.6,
      description: 'Professional haircut at home',
    },
    {
      id: 5,
      name: 'Wall Painting',
      categoryId: 5,
      startingPrice: 200,
      rating: 4.7,
      description: 'Quality wall painting service',
    },
    {
      id: 6,
      name: 'AC Repair',
      categoryId: 6,
      startingPrice: 99,
      rating: 4.8,
      description: 'Air conditioner repair & maintenance',
    },
  ];

  getServiceCategories(): Observable<ServiceCategory[]> {
    return of(this.categories);
  }

  getPopularServices(): Observable<ServiceItem[]> {
    return of(this.popularServices);
  }
}
