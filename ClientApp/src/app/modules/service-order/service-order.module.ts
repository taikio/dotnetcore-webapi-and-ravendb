import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  SharedModule
} from '../shared/shared.module';
import {
  NgbDropdownModule
} from '@ng-bootstrap/ng-bootstrap';
import {
  Routes,
  RouterModule
} from '@angular/router';
import { FormServiceOrderComponent } from './components/form-service-order/form-service-order.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { QueryServicesOrderComponent } from './components/query-services-order/query-services-order.component';
import { AgGridModule } from 'ag-grid-angular';

const routes: Routes = [{
  path: '',
  children: [{
    path: 'new',
    component: FormServiceOrderComponent
  },
  {
    path: 'query',
    component: QueryServicesOrderComponent
  }]
}];

@NgModule({
  declarations: [
    FormServiceOrderComponent,
    QueryServicesOrderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    SharedModule,
    NgbDropdownModule,
    RouterModule.forChild(routes),
    AgGridModule.withComponents([])
  ],
  exports: [RouterModule]
})
export class ServiceOrderModule { }
