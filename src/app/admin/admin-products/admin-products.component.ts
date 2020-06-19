import { Component, OnInit } from '@angular/core';
import products from '../../data/products';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit {
  numbers = [1, 2, 3, 4, 6, 7, 8];
  products: Product[];
  constructor() {}

  ngOnInit(): void {
    this.products = products;
  }
}
