import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDataService } from '../../core/services/home-data.service';
import { ServiceCategory } from '../../shared/models/service.model';
import { ServiceCategoryCardComponent } from '../../shared/components/service-category-card.component';

@Component({
  selector: 'app-home-categories',
  standalone: true,
  imports: [CommonModule, ServiceCategoryCardComponent],
  template: `
    <section class="categories">
      <div class="categories-container">
        <div class="section-header">
          <h2 class="section-title">Popular Services</h2>
          <p class="section-subtitle">Find and book from our most requested services</p>
        </div>

        <div class="categories-grid">
          <app-service-category-card
            *ngFor="let category of categories"
            [category]="category"
          ></app-service-category-card>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .categories {
      padding: 4rem 1rem;
      background: white;
    }

    .categories-container {
      max-width: 1280px;
      margin: 0 auto;
    }

    .section-header {
      margin-bottom: 2.5rem;
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

    .categories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
    }

    @media (max-width: 768px) {
      .categories {
        padding: 3rem 1rem;
      }

      .section-title {
        font-size: 1.5rem;
      }

      .categories-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }
    }

    @media (max-width: 480px) {
      .categories {
        padding: 2rem 1rem;
      }

      .section-title {
        font-size: 1.25rem;
      }

      .categories-grid {
        grid-template-columns: 1fr;
      }
    }
    `
  ],
})
export class HomeCategoriesComponent implements OnInit {
  categories: ServiceCategory[] = [];

  constructor(private homeDataService: HomeDataService) {}

  ngOnInit() {
    this.homeDataService.getServiceCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
