import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {TreeComponent} from './tree/tree.component';
import { SearchComponent } from './search/search.component';
import {BranchComponent} from './tree/branch/branch.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    SearchComponent,
    BranchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
