import {Component} from '@angular/core';
import {Platform} from '@ionic/angular';
import {Storage} from '@ionic/storage-angular'

import {defaultDataProducts, defaultShoppingList} from "./constants/app.constants";
import {StorageServiceProduct} from "./services/StorageServiceProduct";
import {StorageServiceShopping} from "./services/StorageServiceShopping";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private storage!: Storage;

  constructor(private platform: Platform,
              private storageService: Storage,
              private storageServiceProduct: StorageServiceProduct,
              private storageServiceShopping: StorageServiceShopping) {
    this.initializeApp().then();
  }

  async initializeApp() {
    await this.platform.ready();
    await this.storageService.create();
    await this.setItems();
  }

  async setItems() {
    await this.storageServiceProduct.setItem(defaultDataProducts);
    await this.storageServiceShopping.setItem(defaultShoppingList());
  }
}
