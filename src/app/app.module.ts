import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { SearchComponent } from './search/search.component';
import { BranchComponent } from './tree/branch/branch.component';
import { ReactiveFormsModule } from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {appReducers} from './app.reducers';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    SearchComponent,
    BranchComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
