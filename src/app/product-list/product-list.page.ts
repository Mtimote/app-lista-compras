import { Component, OnInit } from '@angular/core';
import {IonSearchbar, ModalController} from '@ionic/angular';

import {Product} from "../shared/models/Product";
import {StorageServiceProduct} from "../services/StorageServiceProduct";
import {CreateProductComponent} from "../shared/modals/create-product/create-product.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  searchText: string = "";
  productList: Product[] = [];
  filteredList: Product[] = [];

  constructor(private modalController: ModalController,
    private storageServiceProduct: StorageServiceProduct) { }

  ngOnInit() {
    this.storageServiceProduct.item$.subscribe(item => {
      this.productList = item || [];
      console.log("CHANGE LIST", item)
      this.filteredList = this.productList;
    });
  }

  onSearchChange(event: CustomEvent): void {
    this.searchText = <string>(event.target as unknown as IonSearchbar).value;
    this.filteredList = this.productList.filter(i => (this.searchText.length > 0 ? i.title.includes(this.searchText) : true));
  }

  async addProduct() {
    const modal = await this.modalController.create({
      component: CreateProductComponent
    });
    return await modal.present();
  }

}
