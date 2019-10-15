import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CustomerService, NewCustomerDto } from '../../services/customer.service';
import { LookupService } from 'src/app/modules/lookup/services/lookup.service';

@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.scss']
})
export class FormCustomerComponent implements OnInit {

  customerForm: FormGroup;

  constructor(
    private lookup: LookupService,
    private fb: FormBuilder,
    private customerService: CustomerService,
    private router: Router) {
  }

  private buildForm() {
    this.customerForm = this.fb.group({
      name: ['', [
        Validators.required,
      ]],
      shortName: ['', [
        Validators.required,
      ]],
      cpf: ['', [
        Validators.required,
      ]],
      email: ['', [
        Validators.required,
      ]],
    });
  }

  submmit(continueForm: boolean = false) {
    if (!this.customerForm.valid) {
      Swal.fire('Atenção...', 'Preencha todos os campos do formulario!', 'warning');
      return;
    }

    const newCustomer = this.customerForm.value as NewCustomerDto;

    this.customerService.newCustomer(newCustomer).subscribe(
      (sucess) => {
        Swal.fire('Sucesso...', 'Cliente cadastrado com sucesso', 'success');
        if (!continueForm) {
          return this.router.navigate(['/dashboard']);
        }
        this.customerForm.reset();
      },
      (error) => {
        Swal.fire('Opps...', 'Ocorreu uma falha ao cadastrar o cliente!', 'error');
        console.log('Falha ao cadastrar o cliente, error');
      }
    );
  }

  ngOnInit() {
    this.buildForm();
  }

}
