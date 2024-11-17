import {ModalController, ToastController} from "@ionic/angular";
import {Component, Input, OnInit} from '@angular/core';

import {Shopping} from "../../models/shopping";
import {ItemOutput} from "../../models/itemOutput";
import {StorageServiceShopping} from "../../../services/StorageServiceShopping";

@Component({
  selector: 'app-detail-shopping-modal',
  templateUrl: './detail-shopping-modal.component.html',
  styleUrls: ['./detail-shopping-modal.component.scss'],
})
export class DetailShoppingModalComponent implements OnInit {
  @Input() list: Shopping = {
    icon: "",
    title: "",
    period: "",
    type: false,
    products: [],
    status: false,
    description: ""
  };
  countCheck = 0;
  statusList: boolean = false;
  shoppingList: Shopping[] = [];

  constructor(private modalController: ModalController,
              private toastController: ToastController,
              private storageServiceShopping: StorageServiceShopping) {
  }

  async ngOnInit() {
    this.countCheck = this.list.products.filter(i => i.status).length;
    this.statusList = this.list.products.filter(i => !i.status).length === 0;
    this.storageServiceShopping.item$.subscribe(item => {
      this.shoppingList = item || [];
    });
  }

  cancel() {
    this.modalController.dismiss(null, 'cancel').then();
  }

  confirm() {
    this.list.status = true;
    this.modalController.dismiss(null, 'confirm').then();
  }

  async handleData(data: ItemOutput) {
    this.countCheck++;
    console.log("Data", data);
    if (this.countCheck >= this.list.products.length) {
      const index = this.shoppingList.findIndex(i => i.title === this.list.title)
      this.shoppingList[index].status = true;
      this.shoppingList[index].products.forEach(i => {
        i.status = true;
        return i
      });
      this.shoppingList[index].dateComplete = new Date();
      await this.storageServiceShopping.setItem(this.shoppingList);
      const toast = await this.toastController.create({
        message: `Completaste la lista, bien hecho :)`, duration: 6000, position: 'bottom'
      });
      await toast.present();
      this.confirm();
    }
  }
}
