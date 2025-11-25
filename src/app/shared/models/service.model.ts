export interface ServiceCategory {
  id: number;
  name: string;
  description: string;
  icon?: string;
}

export interface ServiceItem {
  id: number;
  name: string;
  categoryId: number;
  startingPrice: number;
  rating: number;
  description?: string;
}
