import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product$
  constructor(
    private ds: DataStoreService
  ) { 
    this.product$ = this.ds.getMerchById();
  }

  ngOnInit(): void {
    
  }
}
