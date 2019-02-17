import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {SearchComponent} from './search/search.component';
import {TreeComponent} from './tree/tree.component';

@NgModule({
  declarations: [
    ReactiveFormsModule,
    SearchComponent,
    TreeComponent
  ],
  providers: []
})
export class SearchAndTreeComponent { }
