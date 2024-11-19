import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage-angular';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceProduct {
  private readonly storageReady: Promise<void>;
  private itemSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private storage: Storage) {
    this.storageReady = this.init();
  }

  private async init() {
    await this.storage.create();
    const item = await this.storage.get('list-product');
    this.itemSubject.next(item);
  }

  get item$(): Observable<any> {
    return this.itemSubject.asObservable();
  }

  async setItem(value: any) {
    await this.storageReady;
    await this.storage.set('list-product', value);
    this.itemSubject.next(value);
  }

  async getItem() {
    await this.storageReady;
    return await this.storage.get('list-product');
  }
}
