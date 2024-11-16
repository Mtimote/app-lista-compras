import {Component, Input} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Shopping} from "../../models/shopping";

@Component({
  selector: 'app-detail-shopping-modal',
  templateUrl: './detail-shopping-modal.component.html',
  styleUrls: ['./detail-shopping-modal.component.scss'],
})
export class DetailShoppingModalComponent {
  @Input() list: Shopping = {period: "", status: false, description: "", icon: "", products: [], title: "", type: false};

  constructor(private modalController: ModalController) {
  }

  cancel() {
    console.log("CERRAR");
    this.modalController.dismiss(null, 'cancel');
  }

  confirm() {
    console.log("OK");
    this.modalController.dismiss(null, 'confirm');
  }
}
