import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  getGroupToken() {
    return this.http.get(environment.api+'/group')
  }
  getTaxToken() {
    return this.http.get(environment.api+'/tax')
  }
}
