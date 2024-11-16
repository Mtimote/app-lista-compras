import {IonSearchbar} from '@ionic/angular';
import {Component, OnInit} from '@angular/core';

import {defaultShoppingList} from "../constants/app.constants";
import {Shopping} from "../shared/models/shopping";

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

  constructor() {
  }

  ngOnInit() {
    this.shoppingList = defaultShoppingList();
    this.shoppingListPerson = this.shoppingList.filter(i => i.type);
    this.shoppingListShared = this.shoppingList.filter(i => !i.type);
  }

  onSearchChange(event: CustomEvent): void {
    this.searchText = <string>(event.target as unknown as IonSearchbar).value;
    this.shoppingListPerson = this.shoppingList.filter(i => i.type && (this.searchText.length > 0 ? i.title.includes(this.searchText) : true));
    this.shoppingListShared = this.shoppingList.filter(i => !i.type && (this.searchText.length > 0 ? i.title.includes(this.searchText) : true));
  }
}
