import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddressModel } from '../models/address-model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(
    private http: HttpClient
  ) { }


  getAllAddress() {
    return this.http.get(environment.api + '/address')
  }

  postAddress(address: AddressModel) {
    console.log(address)
    return this.http.post(environment.api + '/address', address)
  }
}
