import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { LoadingService } from 'src/app/modules/ui/services/loading.service';
import { FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { AgGridHelperService } from 'src/app/modules/shared/services/ag-grid-helper.service';
import { NotifyService } from 'src/app/modules/ui/services/notify.service';

@Component({
  selector: 'app-query-customers',
  templateUrl: './query-customers.component.html',
  styleUrls: ['./query-customers.component.scss']
})
export class QueryCustomersComponent implements OnInit, OnDestroy {

  constructor(
    private customerService: CustomerService,
    private loading: LoadingService,
    private agGridHelper: AgGridHelperService,
    private notify: NotifyService) { }

  subscription: Subscription;
  rowData: Observable<any>;
  showSpinner = false;

  columnDefs = [
    { headerName: 'ID Cliente', field: 'id', sortable: true, filter: true },
    { headerName: 'Nome', field: 'name', sortable: true, filter: true },
    { headerName: 'Nome curto', field: 'shortName', sortable: true, filter: true },
    { headerName: 'CPF', field: 'cpf', sortable: true, filter: true, valueFormatter: this.agGridHelper.cpfFormatter },
    { headerName: 'Email', field: 'email', sortable: true, filter: true },
  ];

  getCustomers() {
    this.loading.showHide(true);
    this.rowData = this.customerService.getCustomers();
    this.subscription = this.rowData.subscribe(() => this.loading.showHide(false), (error) => {
      this.loading.showHide(false);
      this.notify.update('Ocorreu um erro ao buscar os clientes', 'error');
      console.error(error);
    });
  }

  ngOnInit() {
    this.getCustomers();
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

}
