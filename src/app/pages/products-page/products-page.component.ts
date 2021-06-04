import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  merch$;
  constructor(
    private ds: DataStoreService,
    private route: ActivatedRoute
  ) { 
    this.ds.bandId$.next(this.route.snapshot.paramMap.get('id'));
    this.merch$ = this.ds.getMerch();
  }

  ngOnInit(): void {
  }
}
