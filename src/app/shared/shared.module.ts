import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemShoppingComponent} from "./components/item-shopping/item-shopping.component";
import {DetailShoppingModalComponent} from "./modals/detail-shopping-modal/detail-shopping-modal.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductViewComponent} from "./components/product-view/product-view.component";
import {CreateListModalComponent} from "./modals/create-list-modal/create-list-modal.component";


const COMPONENTS = [
  ProductViewComponent,
  ItemShoppingComponent,
  CreateListModalComponent,
  DetailShoppingModalComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [...COMPONENTS]
})
export class SharedModule {
}

