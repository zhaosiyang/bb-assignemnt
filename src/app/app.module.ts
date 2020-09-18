import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import {rootReducer} from './core/reducers/root-reducer';
import {rootEffects} from './core/effects/root-effects';
import { TransferFormComponent } from './components/transfer-form/transfer-form.component';
import { TransactionsViewerComponent } from './components/transactions-viewer/transactions-viewer.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonComponentsModule} from './common-components/common-components.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TransferFormComponent,
    TransactionsViewerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(rootReducer, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot(rootEffects),
    ReactiveFormsModule,
    CommonComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
