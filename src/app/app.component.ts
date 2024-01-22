import {Component, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {Product} from "./product";
import {ProductService} from "./product.service";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    ButtonModule,
    TableModule
  ],
  styleUrl: './app.component.css',
  providers: [ProductService]
})
export class AppComponent implements OnInit {
  products!: Product[];
  products2!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProductsMini().then(data => this.products = data);
  }
}
