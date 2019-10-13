import { Injectable } from '@angular/core';
import { HttpHelperService } from '../../http/services/http-helper.service';
import { HttpParams } from '@angular/common/http';
import { PaymentMethod } from '../../lookup/services/lookup.service';
import { Observable } from 'rxjs';


export interface Bill {
  id: string;
  paymentMethod: PaymentMethod;
  value: number;
  destiny: 'R' | 'P';
  status: string;
  paid: boolean;
  dueDate: Date;
  payDate: Date;
  reversalDate: Date;
  cancelDate: Date;
}

export interface NewBillDto {
  paymentMethodSysId: string;
  value: number;
  destiny: 'R' | 'P';
  dueDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private httpHelper: HttpHelperService) { }

  public new(bill: NewBillDto) {
    return this.httpHelper.post('/Bills/New', bill);
  }

  public getByDate(startDate: string, endDate: string, destiny: 'R' | 'P'): Observable<Bill> {
    return this.httpHelper.get('/Bills/GetByDate', {
      startDate,
      endDate,
      destiny
    }) as Observable<Bill>;
  }
}
