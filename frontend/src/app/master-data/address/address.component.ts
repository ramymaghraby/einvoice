import { Component, OnInit } from '@angular/core';
import { AddressModel } from 'src/app/models/address-model';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  address!: AddressModel;
  constructor(
    private addressService: AddressService
  ) { }

  ngOnInit(): void {
    // this.postAddress(this.address)
    this.getAllAddresses();
  }

  getAllAddresses(){
    this.addressService.getAllAddress().subscribe((addressesFromServer:any) => {
      this.address = addressesFromServer;
      console.log(this.address)
    })
  }

  postAddress(address:AddressModel){
    let addressToSubmit = new AddressModel();
    addressToSubmit.branchId = "1";
    addressToSubmit.buildingNumber = "2";
    addressToSubmit.country = "eg";
    addressToSubmit.floor = "3";
    addressToSubmit.governate = "QAH"
    addressToSubmit.landmark = "koko"
    addressToSubmit.postalCode = "11799"
    addressToSubmit.regionCity = "5th"
    addressToSubmit.room = "4"
    addressToSubmit.street = "Naguib"
    addressToSubmit.additionalInformation = "hooppaa"
    console.log(addressToSubmit)
    this.addressService.postAddress(addressToSubmit).subscribe(submittedAddress=>{
      console.log(submittedAddress);
    })
  }

}
