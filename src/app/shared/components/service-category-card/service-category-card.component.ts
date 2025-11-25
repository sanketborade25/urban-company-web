import { Component, Input } from '@angular/core';
import { ServiceCategory } from '../../models/service.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-category-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-category-card.component.html',
  styleUrls: ['./service-category-card.component.scss'],
})
export class ServiceCategoryCardComponent {
  @Input() category!: ServiceCategory;
}
