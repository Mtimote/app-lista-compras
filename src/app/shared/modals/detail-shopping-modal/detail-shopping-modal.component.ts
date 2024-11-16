import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Shopping} from "../../models/shopping";

@Component({
  selector: 'app-detail-shopping-modal',
  templateUrl: './detail-shopping-modal.component.html',
  styleUrls: ['./detail-shopping-modal.component.scss'],
})
export class DetailShoppingModalComponent implements OnInit {
  @Input() list: Shopping = {
    period: "",
    status: false,
    description: "",
    icon: "",
    products: [],
    title: "",
    type: false
  };
  statusList: boolean = false;

  constructor(private modalController: ModalController) {
  }

  ngOnInit(): void {
    this.statusList = this.list.products.filter(i => !i.status).length === 0; 
  }

  cancel() {
    console.log("CERRAR");
    this.modalController.dismiss(null, 'cancel');
  }

  confirm() {
    console.log("OK");
    this.list.status = true;
    this.modalController.dismiss(null, 'confirm');
  }
}
