import { Component, OnInit } from '@angular/core';
import chickenData from '../../assets/chickenData.json';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  public chickenData;

  constructor() {}

  ngOnInit() {
    const keys = Object.keys(chickenData);
    // console.log(keys);
    for (const key of keys) {
      console.log(key);
    }
  }

}
