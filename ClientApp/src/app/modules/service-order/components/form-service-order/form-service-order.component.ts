import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LookupService } from 'src/app/modules/lookup/services/lookup.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceOrderService, ServiceOrder, NewServiceOrderDto } from '../../services/service-order.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'form-service-order',
  templateUrl: './form-service-order.component.html',
  styleUrls: ['./form-service-order.component.scss']
})
export class FormServiceOrderComponent implements OnInit {

  serviceOrderForm: FormGroup;
  paymentMethods: Observable<any>;
  customers: Observable<any>;

  constructor(
    private lookup: LookupService,
    private fb: FormBuilder,
    private serviceOrder: ServiceOrderService,
    private router: Router) { }

  private buildForm() {
    this.serviceOrderForm = this.fb.group({
      description: ['', [
        Validators.required,
        Validators.pattern('[a-zA-Z]{8,}')
      ]],
      customerId: ['', [
        Validators.required,
      ]],
      paymentMethodSysId: ['', [
        Validators.required,
      ]],
      value: ['', [
        Validators.required,
      ]],
      dueDate: ['', [
        Validators.required,
      ]],
    });
  }

  submmit(continueForm: boolean = false) {

    if (!this.serviceOrderForm.valid) {
      Swal.fire('Atenção...', 'Preencha todos os campos do formulario!', 'warning');
      return;
    }

    const newService = this.serviceOrderForm.value as NewServiceOrderDto;
    newService.dueDate = this.getStringDateFromNgbDate(this.serviceOrderForm.value.dueDate);

    this.serviceOrder.newServiceOrder(newService).subscribe(
      (sucess) => {
        Swal.fire('Sucesso...', 'Ordem de serviço cadastrada com sucesso', 'success');
        if (!continueForm) {
          return this.router.navigate(['/dashboard']);
        }
        this.serviceOrderForm.reset();
      },
      (error) => {
        Swal.fire('Opps...', 'Ocorreu uma falha ao cadastrar a ordem de serviço!', 'error');
        console.log('Falha ao cadastrar ordem de serviço, error');
      }
    );
  }

  getStringDateFromNgbDate(ngb: NgbDate){
    return `${ngb.year}-${ngb.month}-${ngb.day}`;
  }

  ngOnInit() {
    this.buildForm();
    this.paymentMethods = this.lookup.getPaymentMethod();
    this.customers = this.lookup.getCustomers();
  }

}
