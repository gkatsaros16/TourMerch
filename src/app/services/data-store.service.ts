import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  product$ = new BehaviorSubject({});
  cart$ = new BehaviorSubject([]);
  cartCount$ = new BehaviorSubject('');
  constructor() {  
    this.getCart()
   }

   updateCart() {
     localStorage.setItem('cart', JSON.stringify(this.cart$.value));
     this.getCart();
   }

   getCart() {
    if (!JSON.parse(localStorage.getItem('cart'))) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
    var cart = JSON.parse(localStorage.getItem('cart'))
    this.cart$.next(cart);
    this.cartCount$.next(cart.length);
   }




















  merch$ = new BehaviorSubject ([
    {
      band: 'Vein.fm',
      src: '../../../../assets/merch/vein/clcr059-vein_errorzonecover-900x900_300x300.jpg',
      item: 'Errorzone',
      description: 'Get in the zone.. Errorzone',
      price: 10
    },
    {
      band: 'Vein.fm',
      src: '../../../../assets/merch/vein/vein_remixalbum_bc_300x300.jpg',
      item: 'RemixxxAlbum',
      description: 'Remixxx Exclusivez',
      price: 10
    },
    {
      band: 'Vein.fm',
      src: '../../../../assets/merch/vein/vein_newmachine_longsleeve_300x300.png',
      item: 'New Machine Long Sleeve',
      description: 'Old Data on the long sleeve',
      price: 30
    },
    {
      band: 'Vein.fm',
      src: '../../../../assets/merch/vein/vein_newmachine_shirt_300x300.png',
      item: 'Old Data TTT',
      description: 'New Machine on this T',
      price: 20
    },
    {
      band: 'Vein.fm',
      src: '../../../../assets/merch/vein/vein_newmachinelogo_redshirt_300x300.png',
      item: 'Red Shirt',
      description: 'Your sittin out of the pit freshie',
      price: 20
    },
    {
      band: 'Vein.fm',
      src: '../../../../assets/merch/vein/vein_nightstalker_hoodie_300x300.png',
      item: 'Nightstalker Hood',
      description: 'Stalkers aren`t all bad lol',
      price: 40
    },
    {
      band: 'Vein.fm',
      src: '../../../../assets/merch/vein/vein_TR_shirt_300x300.png',
      item: 'Treemixx',
      description: 'Another 1',
      price: 20
    },
    {
      band: 'Vein.fm',
      src: '../../../../assets/merch/vein/vein_doomsweats_sweatpants_300x300.png',
      item: 'Doomsweats',
      description: 'Stay cozy in the pit',
      price: 40
    }
  ])
}