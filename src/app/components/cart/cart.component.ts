import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart$;
  setUp = [];
  total = 0;
  constructor(private ds: DataStoreService) {
    this.cart$ = this.ds.cart$;
   }

  ngOnInit(): void {

  }

  getTotal() {
    var total = 0;
    this.cart$.value.forEach(x => {
      // total += x.product.price
    });
    return total
  }

  getMerch(item:any) {
    if (!this.setUp.includes(item.merchId)) {
      this.ds.getMerchFromId(item.merchId).subscribe(x => {
        item.product = x
        this.total += item.qty * x.price;
      });
      this.setUp.push(item.merchId);
    }   
    return true;
  }
}
