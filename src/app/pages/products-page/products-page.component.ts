import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  merch$;
  constructor(
    private ds: DataStoreService
  ) { 
    this.merch$ = this.ds.merch$;
  }

  ngOnInit(): void {
  }
}
