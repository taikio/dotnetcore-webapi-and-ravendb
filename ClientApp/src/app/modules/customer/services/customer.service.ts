import { Injectable } from '@angular/core';
import { HttpHelperService } from '../../http/services/http-helper.service';

export interface NewCustomerDto {
  name: string;
  shortName: string;
  cpf: string;
  email: string;
}

export interface Customer {
  name: string;
  shortName: string;
  cpf: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpHelper: HttpHelperService) { }

  public newCustomer(bill: NewCustomerDto) {
    return this.httpHelper.post('/Customers/New', bill);
  }

  public getCustomers() {
    return this.httpHelper.get('/Lookups/GetCustomers');
  }
}
