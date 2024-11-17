import {Component, OnInit} from '@angular/core';
import {IonSearchbar, ModalController} from '@ionic/angular';

import {Shopping} from "../shared/models/shopping";
import {StorageServiceShopping} from "../services/StorageServiceShopping";
import {CreateListModalComponent} from "../shared/modals/create-list-modal/create-list-modal.component";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {

  searchText: string = "";
  selectedTab: string = 'person';
  shoppingList: Shopping[] = [];
  shoppingListPerson: Shopping[] = [];
  shoppingListShared: Shopping[] = [];

  constructor(private modalController: ModalController,
              private storageServiceShopping: StorageServiceShopping) {
  }

  async ngOnInit() {
    this.storageServiceShopping.item$.subscribe(item => {
      this.shoppingList = item || [];
      console.log("CHANGE LIST", item)
      this.shoppingListPerson = this.shoppingList.filter(i => i.type);
      this.shoppingListShared = this.shoppingList.filter(i => !i.type);
    });
  }

  onSearchChange(event: CustomEvent): void {
    this.searchText = <string>(event.target as unknown as IonSearchbar).value;
    this.shoppingListPerson = this.shoppingList.filter(i => i.type && (this.searchText.length > 0 ? i.title.includes(this.searchText) : true));
    this.shoppingListShared = this.shoppingList.filter(i => !i.type && (this.searchText.length > 0 ? i.title.includes(this.searchText) : true));
  }

  async addList() {
    const modal = await this.modalController.create({
      component: CreateListModalComponent
    });
    return await modal.present();
  }
}
