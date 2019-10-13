import { Component, OnInit, OnDestroy } from '@angular/core';
import { BillService } from '../../services/bill.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs';
import { LoadingService } from 'src/app/modules/ui/services/loading.service';
import { skip } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { AgGridHelperService } from 'src/app/modules/shared/services/ag-grid-helper.service';
import { NotifyService } from 'src/app/modules/ui/services/notify.service';

@Component({
  selector: 'app-query-bills',
  templateUrl: './query-bills.component.html',
  styleUrls: ['./query-bills.component.scss']
})
export class QueryBillsComponent implements OnInit, OnDestroy {

  constructor(
    private billService: BillService,
    private fb: FormBuilder,
    private loading: LoadingService,
    private agGridHelper: AgGridHelperService,
    private notify: NotifyService) { }

  searchForm: FormGroup;
  subscription: Subscription;
  rowData: Observable<any>;
  showSpinner = false;
  datePipe = new DatePipe('en-US');

  columnDefs = [
    { headerName: 'ID Lançamento', field: 'id', sortable: true, filter: true },
    { headerName: 'Meio de Pagamento', field: 'paymentMethod.description', sortable: true, filter: true },
    { headerName: 'Valor R$', field: 'value', sortable: true, filter: true, valueFormatter: this.agGridHelper.currencyFormatter },
    { headerName: 'Destino', field: 'destiny', sortable: true, filter: true },
    { headerName: 'Status', field: 'status', sortable: true, filter: true },
    {
      headerName: 'Pago?', field: 'paid', sortable: true, filter: true, cellRenderer: params => {
        return `<input type='checkbox' ${params.value ? 'checked' : ''} />`;
      }
    },
    {
      headerName: 'Dt. Vencimento', field: 'dueDate', sortable: true, filter: true, valueFormatter: this.agGridHelper.dateFormatter
    },
    {
      headerName: 'Dt. Pagamento', field: 'payDate', sortable: true, filter: true, valueFormatter: this.agGridHelper.dateFormatter
    },
    { headerName: 'Dt. Reversão', field: 'reversalDate', sortable: true, filter: true },
    {
      headerName: 'Dt. Cancelamento', field: 'cancelDate', sortable: true, filter: true, valueFormatter: this.agGridHelper.dateFormatter
    }
  ];

  private buildForm() {
    this.searchForm = this.fb.group({
      startDate: ['', [
        Validators.required,
      ]],
      endDate: ['', [
        Validators.required,
      ]],
      destiny: ['', [
        Validators.required,
      ]],
    });
  }

  search() {
    if (!this.searchForm.valid) {
      return;
    }

    this.loading.showHide(true);

    this.rowData = this.billService.getByDate(
      this.searchForm.value.startDate,
      this.searchForm.value.endDate,
      this.searchForm.value.destiny);

    this.subscription = this.rowData.subscribe(() => this.loading.showHide(false), (error) => {
      this.loading.showHide(false);
      this.notify.update('Ocorreu um erro ao buscar os lançamento financeiros', 'error');
      console.error(error);
    });
  }

  ngOnInit() {
    this.buildForm();
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

}
