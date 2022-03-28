import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Credentials } from '@example-app/auth/models';
import * as fromAuth from '@example-app/auth/reducers';
import { LoginPageActions } from '@example-app/auth/actions';
import { LoginPageStore } from './login-page.store';
import {
  ComponentStore,
  OnStateInit,
  OnStoreInit,
} from '@ngrx/component-store';

@Component({
  selector: 'bc-login-page',
  template: `
    <bc-login-form
      (submitted)="onSubmit($event)"
      [pending]="(pending$ | async)!"
      [errorMessage]="error$ | async"
    >
    </bc-login-form>
  `,
  styles: [],
  providers: [LoginPageStore],
})
export class LoginPageComponent {
  pending$ = this.store.select(fromAuth.selectLoginPagePending);
  error$ = this.store.select(fromAuth.selectLoginPageError);

  constructor(private store: Store, private loginPageStore: LoginPageStore) {}

  ngOnInit() {
    this.loginPageStore.setState({ test: true });
  }

  ngAfterViewInit() {}

  onSubmit(credentials: Credentials) {
    this.store.dispatch(LoginPageActions.login({ credentials }));
  }
}
