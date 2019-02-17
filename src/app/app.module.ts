import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchAndTreeComponent } from './search-and-tree/search-and-tree.component';
import {TreeComponent} from './search-and-tree/tree/tree.component';
import { SearchComponent } from './search-and-tree/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchAndTreeComponent,
    TreeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
