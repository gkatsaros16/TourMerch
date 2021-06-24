import { Component, Input, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {
  @Input() title = ""
  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  back() {
    this.location.back();
  }

}
