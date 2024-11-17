import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IonicModule} from '@ionic/angular'
import {ShoppingListRoutingModule} from './shopping-list-routing.module';
import {ShoppingListComponent} from "./shopping-list.component";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [ShoppingListComponent],
    imports: [
        CommonModule,
        ShoppingListRoutingModule,
        IonicModule,
        FormsModule,
        SharedModule
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShoppingListModule {
}

