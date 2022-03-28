import { Injectable } from '@angular/core';
import {
  ComponentStore,
  OnStateInit,
  OnStoreInit,
} from '@ngrx/component-store';

@Injectable()
export class LoginPageStore
  extends ComponentStore<{ test: boolean }>
  implements OnStoreInit, OnStateInit
{
  constructor() {
    super({ test: false });
  }

  ngrxOnStoreInit() {
    console.log('store init');
  }

  ngrxOnStateInit() {
    console.log('state init', this.get());
  }
}
