import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { LookupService } from 'src/app/modules/lookup/services/lookup.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { BillService } from '../../services/bill.service';

@Component({
  selector: 'app-change-bill',
  templateUrl: './change-bill.component.html',
  styleUrls: ['./change-bill.component.scss']
})
export class ChangeBillComponent implements OnInit {

  @Input() type: 'payment' | 'duedate' | 'value' | 'cancel' | 'pay';
  @Input() idBill: string;

  customers: Observable<any>;

  paymentId: string;
  dueDate: string;
  value: number;

  constructor(
    private lookup: LookupService,
    public activeModal: NgbActiveModal,
    public billService: BillService,
  ) { }

  save() {
    if (this.type === 'payment' && this.value) {
      this.billService.changePaymentMethod(this.idBill, this.paymentId).subscribe(
        (sucess) => {
          Swal.fire('Sucesso...', 'Meio de pagamento alterado com sucesso!', 'success');
          this.activeModal.close();
        },
        (error) => {
          Swal.fire('Opps...', 'Ocorreu uma falha ao alterar o meio de pagamento!', 'error');
          console.log('Falha ao cadastrar o lançamento', error);
        }
      );
    } else if (this.type === 'duedate' && this.dueDate) {
      this.billService.changeDueDate(this.idBill, this.dueDate).subscribe(
        (sucess) => {
          Swal.fire('Sucesso...', 'Data de vencimento alterada com sucesso!', 'success');
          this.activeModal.close();
        },
        (error) => {
          Swal.fire('Opps...', 'Ocorreu uma falha ao alterar a data de vencimento!', 'error');
          console.log('Falha ao cadastrar o lançamento', error);
        }
      );
    } else if (this.type === 'value' && this.value) {
      this.billService.changeValue(this.idBill, this.value).subscribe(
        (sucess) => {
          Swal.fire('Sucesso...', 'Valor alterado com sucesso!', 'success');
          this.activeModal.close();
        },
        (error) => {
          Swal.fire('Opps...', 'Ocorreu uma falha ao alterar o valor!', 'error');
          console.log('Falha ao cadastrar o lançamento', error);
        }
      );
    } else {
      Swal.fire('Atenção...', 'Preencha o campo corretamente!', 'warning');
    }
  }

  cancel() {
    this.billService.cancel(this.idBill).subscribe(
      (sucess) => {
        Swal.fire('Sucesso...', 'Lançamento cancelado com sucesso!', 'success');
        this.activeModal.close();
      },
      (error) => {
        Swal.fire('Opps...', 'Ocorreu uma falha ao cancelar o lançamento!', 'error');
        console.log('Falha ao falha ao cancelar o lançamento', error);
      }
    );
  }

  pay() {
    this.billService.makeRetirement(this.idBill).subscribe(
      (sucess) => {
        Swal.fire('Sucesso...', 'Lançamento baixado com sucesso!', 'success');
        this.activeModal.close();
      },
      (error) => {
        Swal.fire('Opps...', 'Ocorreu uma falha ao baixar o lançamento!', 'error');
        console.log('Falha ao baixar o lançamento', error);
      }
    );
  }

  ngOnInit() {
    if (this.type === 'payment') {
      this.customers = this.lookup.getCustomers();
    }
  }
}
