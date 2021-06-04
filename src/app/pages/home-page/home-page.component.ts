import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  bands$;
  constructor(private ds: DataStoreService) { 
    this.bands$ = this.ds.getBands();
  }

  ngOnInit(): void {
  }

}
