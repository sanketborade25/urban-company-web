import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Step {
  number: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss'],
})
export class HowItWorksComponent {
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
