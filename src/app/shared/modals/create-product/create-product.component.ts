import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {ModalController, ToastController} from "@ionic/angular";

import {Product} from "../../models/Product";
import {iconsShopping} from "../../../constants/app.constants";
import {StorageServiceProduct} from "../../../services/StorageServiceProduct";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent  implements OnInit {

  myForm: FormGroup;
  icons: string[] = [];
  iconSelect: string = "";
  productList: Product[] = [];

  constructor(private formBuilder: FormBuilder,
              private toastController: ToastController,
              private modalController: ModalController,
              private storageServiceProduct: StorageServiceProduct) {
    this.myForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      price: ['', Validators.required],
      icon: ['', Validators.required],
    });
  }

  async ngOnInit() {
    this.icons = iconsShopping;
    this.storageServiceProduct.item$.subscribe(item => {
      this.productList = item || [];
    });
  }

  cancel() {
    this.modalController.dismiss(null, 'cancel').then();
  }

  selectIcon(icon: string) {
    this.iconSelect = icon;
    this.myForm.controls['icon'].setValue(this.iconSelect);
  }

  async save() {
    const toast = await this.toastController.create({
      message: `Se a guardado el producto ${this.myForm.controls['title'].value}`, duration: 6000, position: 'bottom'
    });
    const newItem: Product = {
      title: this.myForm.controls['title'].value,
      description: this.myForm.controls['description'].value,
      price: this.myForm.controls['price'].value,
      img: this.myForm.controls['icon'].value,
      count: 0,
      status: false
    }
    this.productList.push(newItem);
    await this.storageServiceProduct.setItem(this.productList);
    await toast.present();
    this.myForm.reset();
    this.iconSelect = "";
    this.modalController.dismiss(null, 'save').then();
  }

}
