import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Step {
  number: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home-how-it-works',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="how-it-works">
      <div class="how-it-works-container">
        <div class="section-header">
          <h2 class="section-title">How It Works</h2>
          <p class="section-subtitle">Get your home services in 4 simple steps</p>
        </div>

        <div class="steps-container">
          <div *ngFor="let step of steps" class="step">
            <div class="step-number">{{ step.number }}</div>
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-description">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .how-it-works {
      padding: 4rem 1rem;
      background: white;
    }

    .how-it-works-container {
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

    .steps-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }

    .step {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }

    .step-number {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: var(--primary-color);
      color: white;
      font-size: 1.5rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
    }

    .step-title {
      margin: 0 0 0.75rem 0;
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--text-color);
    }

    .step-description {
      margin: 0;
      color: var(--text-secondary);
      font-size: 0.875rem;
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .how-it-works {
        padding: 3rem 1rem;
      }

      .section-title {
        font-size: 1.5rem;
      }

      .steps-container {
        gap: 1.5rem;
      }
    }

    @media (max-width: 480px) {
      .how-it-works {
        padding: 2rem 1rem;
      }

      .section-title {
        font-size: 1.25rem;
      }

      .steps-container {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
    }
    `
  ],
})
export class HomeHowItWorksComponent {
  steps: Step[] = [
    {
      number: 1,
      title: 'Choose a Service',
      description: 'Browse from hundreds of home services and pick what you need',
    },
    {
      number: 2,
      title: 'Pick Date & Time',
      description: 'Select a convenient date and time slot for the service',
    },
    {
      number: 3,
      title: 'Get a Professional',
      description: 'Get matched with a verified, background-checked professional',
    },
    {
      number: 4,
      title: 'Pay Securely',
      description: 'Complete payment safely and securely through our platform',
    },
  ];
}
