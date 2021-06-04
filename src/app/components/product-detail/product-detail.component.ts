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
    private ds: DataStoreService,
    private route: ActivatedRoute
  ) { 
    this.product$ = this.ds.product$;
  }

  ngOnInit(): void {
    //if going to page by url/refresh page find product by item name
    if (!this.product$.value.item) {
      this.product$.next(this.ds.merch$.value.find(x => x.item == this.route.snapshot.paramMap.get('item')));
    }
  }
}
