import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'src/app/services/data-store.service';
declare var $: any;
@Component({
  selector: 'app-shop-controls',
  templateUrl: './shop-controls.component.html',
  styleUrls: ['./shop-controls.component.scss']
})
export class ShopControlsComponent implements OnInit {
  size: any;
  qty: any;
  constructor(private ds: DataStoreService) { 

  }

  ngOnInit(): void {
    $(document).ready(function(){
      $('select').formSelect();
    });
  }

  addToCart() {
    var product = this.ds.product$.value;
    this.ds.cart$.next([...this.ds.cart$.value, {product, size: this.size, qty: this.qty}])
    this.ds.updateCart();
  }
}
