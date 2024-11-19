import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Product} from "../../models/Product";
import {ItemOutput} from "../../models/itemOutput";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent {
  @Input() item: Product = {
    title: "",
    description: "",
    price: 0,
    img: "",
    count: 0,
    status: false,
    completeDate: new Date()
  }
  @Output() dataEvent = new EventEmitter<ItemOutput>();

  checked: boolean = false;

  constructor() {
  }

  onCheckboxChange(event: any) {
    if (event.detail.checked) {
      this.item.status = true;
      this.dataEvent.emit({
        status: true,
        title: this.item.title
      });
    }
  }

}
