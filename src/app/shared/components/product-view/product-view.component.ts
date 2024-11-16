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
  checked: boolean = false;

  constructor() {
  }

  onCheckboxChange(event: any) {
    console.log('Checkbox changed:', event.detail.checked);
    if (event.detail.checked) {
      this.item.status = true;
      console.log('Checkbox is checked');
    }
  }

}
