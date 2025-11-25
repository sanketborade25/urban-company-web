import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDataService } from '../../core/services/home-data.service';
import { ServiceItem } from '../../shared/models/service.model';
import { ServiceCardComponent } from '../../shared/components/service-card.component';

@Component({
  selector: 'app-home-popular-services',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent],
  template: `
    <section class="popular-services">
      <div class="popular-services-container">
        <div class="section-header">
          <h2 class="section-title">Most Requested Services</h2>
          <p class="section-subtitle">Book trusted services at the best prices</p>
        </div>

        <div class="services-scroll">
          <app-service-card
            *ngFor="let service of popularServices"
            [service]="service"
          ></app-service-card>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .popular-services {
      padding: 4rem 1rem;
      background: #fafafa;
    }

    .popular-services-container {
      max-width: 1280px;
      margin: 0 auto;
    }

    .section-header {
      margin-bottom: 2rem;
      text-align: center;
    }

    .section-title {
      margin: 0 0 0.5rem 0;
      font-size: 2rem;
      font-weight: 700;
      color: var(--text-color);
    }

    .section-subtitle {
      margin: 0;
      font-size: 1rem;
      color: var(--text-secondary);
    }

    .services-scroll {
      display: flex;
      gap: 1.5rem;
      overflow-x: auto;
      padding-bottom: 0.5rem;
      scrollbar-width: thin;
      scrollbar-color: var(--border-color) transparent;
    }

    .services-scroll::-webkit-scrollbar {
      height: 6px;
    }

    .services-scroll::-webkit-scrollbar-track {
      background: transparent;
    }

    .services-scroll::-webkit-scrollbar-thumb {
      background: var(--border-color);
      border-radius: 3px;
    }

    .services-scroll::-webkit-scrollbar-thumb:hover {
      background: var(--text-secondary);
    }

    @media (max-width: 768px) {
      .popular-services {
        padding: 3rem 1rem;
      }

      .section-title {
        font-size: 1.5rem;
      }

      .services-scroll {
        gap: 1rem;
      }
    }

    @media (max-width: 480px) {
      .popular-services {
        padding: 2rem 1rem;
      }

      .section-title {
        font-size: 1.25rem;
      }

      .section-subtitle {
        font-size: 0.95rem;
      }
    }
    `
  ],
})
export class HomePopularServicesComponent implements OnInit {
  popularServices: ServiceItem[] = [];

  constructor(private homeDataService: HomeDataService) {}

  ngOnInit() {
    this.homeDataService.getPopularServices().subscribe((data) => {
      this.popularServices = data;
    });
  }
}
