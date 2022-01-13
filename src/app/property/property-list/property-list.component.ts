import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties: Array<any>=[{
    "id":1,
    "Name":"Aditya Birla",
    "Type":"House",
    "Price":4000
  },
  {
    "id":2,
    "Name":"Aditya Birla",
    "Type":"House",
    "Price":951000
  },
  {
    "id":3,
    "Name":"Aditya Birla",
    "Type":"House",
    "Price":8854000
  },
  {
    "id":4,
    "Name":"Aditya Birla",
    "Type":"House",
    "Price":75800
  },
  {
    "id":5,
    "Name":"Aditya Birla",
    "Type":"House",
    "Price":45500
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
