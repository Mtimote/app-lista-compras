import {Component, Input} from '@angular/core';
import {ModalController} from "@ionic/angular";

import {Shopping} from "../../models/shopping";
import {DetailShoppingModalComponent} from "../../modals/detail-shopping-modal/detail-shopping-modal.component";

@Component({
  selector: 'app-item-shopping',
  templateUrl: './item-shopping.component.html',
  styleUrls: ['./item-shopping.component.scss'],
})
export class ItemShoppingComponent {

  @Input() item: Shopping = {
    period: "", status: false,
    icon: "",
    title: "",
    type: false,
    description: "",
    products: []
  };

  constructor(private modalController: ModalController) {
  }


  async viewDetail() {
    const modal = await this.modalController.create({
      component: DetailShoppingModalComponent,
      componentProps: {
        list: this.item
      }
    });
    return await modal.present();
  }
}
