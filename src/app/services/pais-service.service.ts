import { Injectable } from '@angular/core';
import { countriesData } from '../countries-data';

@Injectable({
  providedIn: 'root'
})
export class PaisServiceService {

  constructor() { }

  getCountries(){
    return countriesData
  }
}
