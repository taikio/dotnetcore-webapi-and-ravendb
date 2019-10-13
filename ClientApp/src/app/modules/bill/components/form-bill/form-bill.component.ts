import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LookupService } from 'src/app/modules/lookup/services/lookup.service';
import Swal from 'sweetalert2';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BillService, NewBillDto } from '../../services/bill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'form-bill',
  templateUrl: './form-bill.component.html',
  styleUrls: ['./form-bill.component.scss']
})
export class FormBillComponent implements OnInit {

  billForm: FormGroup;
  paymentMethods: Observable<any>;

  constructor(
    private lookup: LookupService,
    private fb: FormBuilder,
    private billService: BillService,
    private router: Router) {
  }

  private buildForm() {
    this.billForm = this.fb.group({
      paymentMethodSysId: ['', [
        Validators.required,
      ]],
      value: ['', [
        Validators.required,
      ]],
      destiny: ['', [
        Validators.required,
      ]],
      dueDate: ['', [
        Validators.required,
      ]],
    });
  }

  submmit(continueForm: boolean = false) {
    if (!this.billForm.valid) {
      return;
    }

    const newService = this.billForm.value as NewBillDto;

    this.billService.new(newService).subscribe(
      (sucess) => {
        Swal.fire('Sucesso...', 'Lançamento cadastrado com sucesso', 'success');
        if (!continueForm) {
          return this.router.navigate(['/dashboard']);
        }
        this.billForm.reset();
      },
      (error) => {
        Swal.fire('Opps...', 'Ocorreu uma falha ao cadastrar o lançamento!', 'error');
        console.log('Falha ao cadastrar o lançamento, error');
      }
    );
  }

  ngOnInit() {
    this.buildForm();
    this.paymentMethods = this.lookup.getPaymentMethod();
  }

}
