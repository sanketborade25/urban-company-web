import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">Home services, on demand</h1>
          <p class="hero-subtitle">
            Connect with trusted, background-verified professionals for all your home service needs.
          </p>
          <div class="hero-actions">
            <button class="btn-primary">Book a service</button>
            <button class="btn-secondary">Explore services</button>
          </div>
        </div>
        <div class="hero-illustration">
          <div class="illustration-placeholder">🏠</div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .hero {
      background: linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%);
      padding: 4rem 1rem;
    }

    .hero-container {
      max-width: 1280px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .hero-content {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .hero-title {
      margin: 0;
      font-size: 3rem;
      font-weight: 700;
      line-height: 1.2;
      color: var(--text-color);
    }

    .hero-subtitle {
      margin: 0;
      font-size: 1.125rem;
      line-height: 1.6;
      color: var(--text-secondary);
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .btn-primary {
      padding: 0.875rem 2rem;
      background: var(--primary-color);
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }

    .btn-primary:hover {
      background: #ff6b1a;
    }

    .btn-secondary {
      padding: 0.875rem 2rem;
      background: white;
      color: var(--primary-color);
      border: 2px solid var(--primary-color);
      border-radius: 4px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }

    .btn-secondary:hover {
      background: var(--primary-color);
      color: white;
    }

    .hero-illustration {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .illustration-placeholder {
      font-size: 12rem;
      opacity: 0.8;
      animation: float 3s ease-in-out infinite;
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    @media (max-width: 768px) {
      .hero {
        padding: 3rem 1rem;
      }

      .hero-container {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .hero-title {
        font-size: 2rem;
      }

      .hero-subtitle {
        font-size: 1rem;
      }

      .hero-actions {
        flex-direction: column;
      }

      .btn-primary,
      .btn-secondary {
        width: 100%;
      }

      .illustration-placeholder {
        font-size: 8rem;
      }
    }

    @media (max-width: 480px) {
      .hero {
        padding: 2rem 1rem;
      }

      .hero-title {
        font-size: 1.5rem;
      }

      .hero-subtitle {
        font-size: 0.95rem;
      }
    }
    `
  ],
})
export class HomeHeroComponent {}
