import { Component, Input } from '@angular/core';

import {Product} from "../../models/Product";

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.scss'],
})
export class ItemProductComponent  {

  @Input() item: Product = {
    title: "",
    description: "",
    price: 0,
    count: 0,
    img: "",
    status: false,
    completeDate: new Date()
  };

  constructor() { }

  ngOnInit() {}

}
