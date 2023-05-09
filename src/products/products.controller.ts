import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './products.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts() {
    return this.productService.getProducts();
  }

  @Post()
  addProduct(
    @Body('name') name: string,
    @Body('title') title: string,
    @Body('description') description: string,
  ): string {
    return this.productService.insertProduct(name, title, description);
  }
}
