import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiceOrderService } from '../../services/service-order.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingService } from 'src/app/modules/ui/services/loading.service';
import { Subscription, Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { AgGridHelperService } from 'src/app/modules/shared/services/ag-grid-helper.service';
import { NotifyService } from 'src/app/modules/ui/services/notify.service';

@Component({
  selector: 'app-query-services-order',
  templateUrl: './query-services-order.component.html',
  styleUrls: ['./query-services-order.component.scss']
})
export class QueryServicesOrderComponent implements OnInit, OnDestroy {

  constructor(
    private serviceOrderService: ServiceOrderService,
    private fb: FormBuilder,
    private loading: LoadingService,
    private agGridHelper: AgGridHelperService,
    private notify: NotifyService) { }

  searchForm: FormGroup;
  subscription: Subscription;
  rowData: Observable<any>;
  showSpinner = false;

  columnDefs = [
    { headerName: 'Descrição', field: 'description', sortable: true, filter: true },
    { headerName: 'Cliente', field: 'customer.name', sortable: true, filter: true },
    { headerName: 'Data', field: 'date', sortable: true, filter: true, valueFormatter: this.agGridHelper.dateFormatter },
    {
      headerName: 'Cancelado?', field: 'paid', sortable: true, filter: true, cellRenderer: params => {
        return `<input type='checkbox' ${params.value ? 'checked' : ''} />`;
      }
    },
    {
      headerName: 'Dt. Cancelamento', field: 'cancelDate', sortable: true, filter: true, valueFormatter: this.agGridHelper.dateFormatter
    },
    // { headerName: 'ID Ordem', field: 'id', sortable: true, filter: true },
    {
      headerName: 'Lançamento',
      marryChildren: true,
      headerClass: 'lancamento',
      children: [
        {
          headerName: 'Meio de Pagamento', field: 'bill.paymentMethod.description',
          sortable: true, filter: true, columnGroupShow: 'open'
        },
        { headerName: 'Valor R$', field: 'bill.value', sortable: true, filter: true, valueFormatter: this.agGridHelper.currencyFormatter },
        { headerName: 'Destino', field: 'bill.destiny', sortable: true, filter: true, columnGroupShow: 'open' },
        { headerName: 'Status', field: 'bill.status', sortable: true, filter: true, columnGroupShow: 'open' },
        {
          headerName: 'Pago?', field: 'bill.paid', sortable: true, filter: true, cellRenderer: params => {
            return `<input type='checkbox' ${params.value ? 'checked' : ''} />`;
          }, columnGroupShow: 'open'
        },
        {
          headerName: 'Dt. Vencimento', field: 'bill.dueDate', sortable: true, filter: true,
          valueFormatter: this.agGridHelper.dateFormatter, columnGroupShow: 'open'
        },
        {
          headerName: 'Dt. Pagamento', field: 'bill.payDate', sortable: true,
          filter: true, valueFormatter: this.agGridHelper.dateFormatter, columnGroupShow: 'open'
        },
        { headerName: 'Dt. Reversão', field: 'bill.reversalDate', sortable: true, filter: true, columnGroupShow: 'open' },
        {
          headerName: 'Dt. Cancelamento', field: 'bill.cancelDate', sortable: true,
          filter: true, valueFormatter: this.agGridHelper.dateFormatter, columnGroupShow: 'open'
        },
        // { headerName: 'ID Lançamento', field: 'bill.id', sortable: true, filter: true, columnGroupShow: 'open' },
      ]
    },
  ];

  defaultColDef: {
    sortable: true,
    resizable: true,
    filter: true
  };

  private buildForm() {
    this.searchForm = this.fb.group({
      startDate: ['', [
        Validators.required,
      ]],
      endDate: ['', [
        Validators.required,
      ]],

    });
  }

  search(pesquisarTodos = false) {
    if (!pesquisarTodos && !this.searchForm.valid) {
      return;
    }

    this.loading.showHide(true);

    if (pesquisarTodos) {
      this.rowData = this.serviceOrderService.getAll();
    } else {
      this.rowData = this.serviceOrderService.getByDate(
        this.searchForm.value.startDate,
        this.searchForm.value.endDate);
    }

    this.subscription = this.rowData.subscribe(() => this.loading.showHide(false), (error) => {
      this.loading.showHide(false);
      this.notify.update('Ocorreu um erro ao buscar as ordens de serviço', 'error');
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
