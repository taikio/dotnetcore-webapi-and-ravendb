import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-change-service-order',
  templateUrl: './change-service-order.component.html',
  styleUrls: ['./change-service-order.component.scss']
})
export class ChangeServiceOrderComponent implements OnInit {

  @Input() type: 'description' | 'customer';

  serviceOrderForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal
  ) { }

  private buildForm() {
    this.serviceOrderForm = this.fb.group({
      description: ['', [
        Validators.required,
      ]],
      customerId: ['', [
        Validators.required,
      ]],
    });
  }

  ngOnInit() {
  }

}
