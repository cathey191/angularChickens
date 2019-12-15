import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchForm = new FormGroup({
    searchQuery: new FormControl('')
  });

  public search () {
    console.log(this.searchForm.value.searchQuery);
  }

}
