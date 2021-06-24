import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {
  constructor(
    private ds: DataStoreService,
    private route: ActivatedRoute
  ) { 
    this.ds.merchId$.next(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
  }

}
