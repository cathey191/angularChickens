import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TreeComponent} from './tree/tree.component';
import {ChickensComponent} from './chickens/chickens.component';
import {BranchComponent} from './tree/branch/branch.component';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {appReducer} from './app.reducer';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {ChickenEffects} from './chickens/chickens.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
    declarations: [
        AppComponent,
        TreeComponent,
        ChickensComponent,
        BranchComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        StoreModule.forRoot(appReducer),
        EffectsModule.forRoot([ChickenEffects]),
        StoreDevtoolsModule.instrument({ maxAge: 50 })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
