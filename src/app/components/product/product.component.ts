import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStoreService } from '../../services/data-store.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product;
  constructor(
    private ds: DataStoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  goToProduct() {
    this.ds.product$.next(this.product);
    this.router.navigateByUrl(`/vein/${this.product.item}`);
  }

}
