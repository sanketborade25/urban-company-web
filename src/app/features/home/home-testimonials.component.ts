import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="testimonials">
      <div class="testimonials-container">
        <div class="section-header">
          <h2 class="section-title">Why Choose UrbanClone?</h2>
          <p class="section-subtitle">Trusted by millions of users worldwide</p>
        </div>

        <div class="testimonials-grid">
          <div *ngFor="let item of testimonials" class="testimonial-card">
            <div class="testimonial-icon">{{ item.icon }}</div>
            <h3 class="testimonial-title">{{ item.title }}</h3>
            <p class="testimonial-description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .testimonials {
      padding: 4rem 1rem;
      background: linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%);
    }

    .testimonials-container {
      max-width: 1280px;
      margin: 0 auto;
    }

    .section-header {
      margin-bottom: 3rem;
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

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .testimonial-card {
      padding: 2rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      text-align: center;
      transition: all 0.3s ease;
    }

    .testimonial-card:hover {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
      transform: translateY(-4px);
    }

    .testimonial-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .testimonial-title {
      margin: 0 0 0.75rem 0;
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--text-color);
    }

    .testimonial-description {
      margin: 0;
      color: var(--text-secondary);
      font-size: 0.875rem;
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .testimonials {
        padding: 3rem 1rem;
      }

      .section-title {
        font-size: 1.5rem;
      }

      .testimonials-grid {
        gap: 1.5rem;
      }
    }

    @media (max-width: 480px) {
      .testimonials {
        padding: 2rem 1rem;
      }

      .section-title {
        font-size: 1.25rem;
      }

      .testimonial-card {
        padding: 1.5rem;
      }
    }
    `
  ],
})
export class HomeTestimonialsComponent {
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
