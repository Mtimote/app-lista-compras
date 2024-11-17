import {Component, OnInit} from '@angular/core';
import {ModalController, ToastController} from "@ionic/angular";
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

import {Shopping} from "../../models/shopping";
import {iconsShopping} from "../../../constants/app.constants";
import {StorageServiceShopping} from "../../../services/StorageServiceShopping";

@Component({
  selector: 'app-create-list-modal',
  templateUrl: './create-list-modal.component.html',
  styleUrls: ['./create-list-modal.component.scss'],
})
export class CreateListModalComponent implements OnInit {
  myForm: FormGroup;
  icons: string[] = [];
  iconSelect: string = "";
  shoppingList: Shopping[] = [];

  constructor(private formBuilder: FormBuilder,
              private toastController: ToastController,
              private modalController: ModalController,
              private storageServiceShopping: StorageServiceShopping) {
    this.myForm = this.formBuilder.group({
      icon: ['', Validators.required],
      title: ['', Validators.required],
      type: ['personal', Validators.required],
      period: ['', Validators.required],
      description: [''],
    });
  }

  async ngOnInit() {
    this.icons = iconsShopping;
    this.storageServiceShopping.item$.subscribe(item => {
      this.shoppingList = item || [];
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
      message: `Se a guardado la lista ${this.myForm.controls['title'].value}`, duration: 6000, position: 'bottom'
    });
    const newItem: Shopping = {
      products: [],
      status: false,
      icon: this.myForm.controls['icon'].value,
      title: this.myForm.controls['title'].value,
      period: this.myForm.controls['period'].value,
      description: this.myForm.controls['description'].value,
      type: this.myForm.controls['type'].value === "personal"
    }
    this.shoppingList.push(newItem);
    await this.storageServiceShopping.setItem(this.shoppingList);
    await toast.present();
    this.myForm.reset();
    this.iconSelect = "";
    this.modalController.dismiss(null, 'save').then();
  }
}
