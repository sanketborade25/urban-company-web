import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDataService } from '../../../../core/services/home-data.service';
import { ServiceCategory } from '../../../../shared/models/service.model';
import { ServiceCategoryCardComponent } from '../../../../shared/components/service-category-card/service-category-card.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, ServiceCategoryCardComponent],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: ServiceCategory[] = [];

  constructor(private homeDataService: HomeDataService) {}

  ngOnInit() {
    this.homeDataService.getServiceCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
