import {Component, Input, OnInit} from '@angular/core';
import {Shopping} from "../../models/shopping";
import {ModalController} from "@ionic/angular";
import {DetailShoppingModalComponent} from "../../modals/detail-shopping-modal/detail-shopping-modal.component";

@Component({
  selector: 'app-item-shopping',
  templateUrl: './item-shopping.component.html',
  styleUrls: ['./item-shopping.component.scss'],
})
export class ItemShoppingComponent implements OnInit {

  @Input() item: Shopping = {
    period: "", status: false,
    icon: "",
    title: "",
    type: false,
    description: "",
    products: []
  };
  countItems: number = 0;

  constructor(private modalController: ModalController) {
  }

  ngOnInit(): void {
   this.countItems=  this.item.products.filter(i=>!i.status).length;
  }

  async viewDetail() {
    console.log("VER DETALLE");
    const modal = await this.modalController.create({
      component: DetailShoppingModalComponent,
      componentProps: {
        list: this.item
      }
    });
    return await modal.present();
  }

}
