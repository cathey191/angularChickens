import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchAndTreeComponent } from './search-and-tree/search-and-tree.component';
import {TreeComponent} from './search-and-tree/tree/tree.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchAndTreeComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
