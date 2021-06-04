import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  cartCount$
  constructor(
    private ds: DataStoreService
  ) {
    this.cartCount$ = this.ds.cartCount$
   }

  ngOnInit(): void {
  }

}
