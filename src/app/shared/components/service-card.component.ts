import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceItem } from '../../models/service.model';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">{{ service.name }}</h3>
      </div>
      <p class="card-description">{{ service.description }}</p>
      <div class="card-footer">
        <div class="price">
          <span class="price-label">Starting at</span>
          <span class="price-value">{{ '$' + service.startingPrice }}</span>
        </div>
        <div class="rating">
          <span class="stars">⭐</span>
          <span class="rating-value">{{ service.rating }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
    .card {
      min-width: 250px;
      padding: 1rem;
      border: 1px solid var(--border-color);
      border-radius: 8px;
      background: white;
      transition: all 0.3s ease;
      flex-shrink: 0;
    }

    .card:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      border-color: var(--primary-color);
    }

    .card-header {
      margin-bottom: 0.75rem;
    }

    .card-title {
      margin: 0;
      font-size: 1rem;
      font-weight: 600;
      color: var(--text-color);
    }

    .card-description {
      margin: 0 0 1rem 0;
      color: var(--text-secondary);
      font-size: 0.875rem;
      line-height: 1.5;
    }

    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-top: 1rem;
      border-top: 1px solid var(--border-color);
    }

    .price {
      display: flex;
      flex-direction: column;
    }

    .price-label {
      font-size: 0.75rem;
      color: var(--text-secondary);
      margin-bottom: 0.25rem;
    }

    .price-value {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--primary-color);
    }

    .rating {
      display: flex;
      align-items: center;
      gap: 0.35rem;
    }

    .stars {
      font-size: 0.9rem;
    }

    .rating-value {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--text-color);
    }
    `
  ],
})
export class ServiceCardComponent {
  @Input() service!: ServiceItem;
}
