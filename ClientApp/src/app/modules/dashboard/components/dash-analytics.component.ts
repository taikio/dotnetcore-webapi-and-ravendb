import { Component, OnInit } from '@angular/core';
import { ApexChartService } from '../../shared/components/chart/apex-chart/apex-chart.service';
import { ChartDB } from '../fack-db/chart-data';
import { BillService, AccountBalance } from '../../bill/services/bill.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dash-analytics',
  templateUrl: './dash-analytics.component.html',
  styleUrls: ['./dash-analytics.component.scss']
})
export class DashAnalyticsComponent implements OnInit {
  public chartDB: any;
  public dailyVisitorStatus: string;
  public dailyVisitorAxis: any; n;
  public deviceProgressBar: any;

  public startDate: string;
  public endDate: string;
  public accountBalance: Observable<AccountBalance>;

  constructor(
    public apexEvent: ApexChartService,
    private billService: BillService) {

    this.chartDB = ChartDB;
    this.dailyVisitorStatus = '1y';

    this.deviceProgressBar = [
      {
        type: 'success',
        value: 66
      }, {
        type: 'primary',
        value: 26
      }, {
        type: 'danger',
        value: 8
      }
    ];
  }

  dailyVisitorEvent(status) {
    this.dailyVisitorStatus = status;
    switch (status) {
      case '1m':
        this.dailyVisitorAxis = {
          min: new Date('28 Jan 2013').getTime(),
          max: new Date('27 Feb 2013').getTime(),
        };
        break;
      case '6m':
        this.dailyVisitorAxis = {
          min: new Date('27 Sep 2012').getTime(),
          max: new Date('27 Feb 2013').getTime()
        };
        break;
      case '1y':
        this.dailyVisitorAxis = {
          min: new Date('27 Feb 2012').getTime(),
          max: new Date('27 Feb 2013').getTime()
        };
        break;
      case 'ytd':
        this.dailyVisitorAxis = {
          min: new Date('01 Jan 2013').getTime(),
          max: new Date('27 Feb 2013').getTime()
        };
        break;
      case 'all':
        this.dailyVisitorAxis = {
          min: undefined,
          max: undefined
        };
        break;
    }
  }

  search() {
    this.accountBalance = this.billService.AccountBalance(this.startDate, this.endDate);
  }

  ngOnInit() {
    const date = new Date();
    const y = date.getFullYear();
    const m = date.getMonth();

    this.startDate = new Date(y, m, 1).toISOString().split('T')[0];
    this.endDate = new Date(new Date(y, m + 1, 1, 0).setDate(-1)).toISOString().split('T')[0];

    this.search();
  }

}
