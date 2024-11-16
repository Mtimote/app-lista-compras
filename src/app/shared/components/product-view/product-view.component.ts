import {Component, Input} from '@angular/core';
import {Product} from "../../models/Product";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent {
  @Input() item: Product = {
    img: "",
    count: 0,
    title: "",
    status: false,
    completeDate: new Date()
  }

  constructor() {
  }

}
