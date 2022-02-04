import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HousingService} from '../../service/housing.service';
import { IProperty } from '../IProperty';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  sellRent=1;
  properties: Array<IProperty> | undefined;

  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.sellRent=2;
    }
    this.housingService.getAllProperties(this.sellRent).subscribe(
      data => {
        this.properties = data;
        console.log(data);
      },
      error =>{
        console.log(error);
      }
    )
  }

}
