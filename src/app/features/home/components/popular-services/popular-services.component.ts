import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDataService } from '../../../../core/services/home-data.service';
import { ServiceItem } from '../../../../shared/models/service.model';
import { ServiceCardComponent } from '../../../../shared/components/service-card/service-card.component';

@Component({
  selector: 'app-popular-services',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent],
  templateUrl: './popular-services.component.html',
  styleUrls: ['./popular-services.component.scss'],
})
export class PopularServicesComponent implements OnInit {
  popularServices: ServiceItem[] = [];

  constructor(private homeDataService: HomeDataService) {}

  ngOnInit() {
    this.homeDataService.getPopularServices().subscribe((data) => {
      this.popularServices = data;
    });
  }
}
