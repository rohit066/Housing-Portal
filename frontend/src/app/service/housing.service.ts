import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IProperty } from '../property/IProperty';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http: HttpClient) { }

  getAllProperties(sellRent:number): Observable<IProperty[]>{
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<IProperty>= [];
        Object.entries(data).forEach(item=>{
            if(item[1].SellRent==sellRent){
              propertiesArray.push(item[1]);
            }

        })
        return propertiesArray;
      })
    );
  }

}
