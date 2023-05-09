import { Injectable } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductService {
  products: Product[] = [];

  insertProduct(name: string, title: string, description: string) {
    const id = new Date().toISOString();
    this.products.push({ id, name, title, description });
    return id;
  }

  getProducts() {
    return this.products;
  }
}
