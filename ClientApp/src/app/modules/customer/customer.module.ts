import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCustomerComponent } from './components/form-customer/form-customer.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { QueryCustomersComponent } from './components/query-customers/query-customers.component';
import { AgGridModule } from 'ag-grid-angular';

const routes: Routes = [{
  path: '',
  children: [{
    path: 'new',
    component: FormCustomerComponent
  },
  {
    path: 'query',
    component: QueryCustomersComponent
  }]
}];

@NgModule({
  declarations: [
    FormCustomerComponent,
    QueryCustomersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    RouterModule.forChild(routes),
    SharedModule,
    AgGridModule.withComponents([])
  ],
  exports: [
    RouterModule
  ]
})
export class CustomerModule { }
