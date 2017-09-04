import { Component, OnInit } from '@angular/core';
import { StateService } from '../providers/stateserviceprovider';
import { StaterenderComponent } from "./staterender/staterender.component";
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  source: LocalDataSource;
  pageSize = 10;
  pages = [];
  currentPage = 1;
  totalStates; //total count of states, used for pagination
  stateService;
  settings;
  constructor(_StateService: StateService) {
    this.stateService = _StateService
  }

  ngOnInit() {
    //List Settings
    this.settings = {
      pager: {
        perPage: 10,
        display: true
      },
      actions: {
        edit: false,
        delete: false,
        add: false
      },
      attr: { class: "table table-bordered table-hover" },
      columns: {
        name: {
          title: 'Name',
          type: 'custom',
          renderComponent: StaterenderComponent,
          filter: false,
          sort: false
        },
        abbreviation: {
          title: 'Abbreviation',
          filter: false,
          sort: false
        },
        'most-populous-city': {
          title: 'Most Populous City',
          filter: false,
          sort: false
        },
        population: {
          title: 'Population',
          filter: false,
          sort: false
        },
        'square-miles': {
          title: 'Square Miles',
          filter: false,
          sort: false
        },
        'time-zone-1': {
          title: 'Time Zone 1',
          filter: false,
          sort: false
        },
        'time-zone-2': {
          title: 'Time Zone 2',
          filter: false,
          sort: false
        },
        dst: {
          title: 'DST',
          filter: false,
          sort: false
        }
      }
    };

    //Fetch States and Apply Pagination
    this.stateService.GetStates(1, '').subscribe(
      (d) => {
        var data = JSON.parse(d._body);

        let i;
        for (i = 1; i <= (data.count / 10); i++) {
          this.pages.push(i);
        }

        if (data.count % 10 != 0) {
          this.pages.push(i);
        }

        this.source = new LocalDataSource(data.result);
      },
      err => {
        console.error(err);
      }
    );

  }

  refreshGrid(item) {
    if (item) {
      this.currentPage = item;
    }

    this.stateService.GetStates(this.currentPage, '').subscribe(
      (d) => {
        var data = JSON.parse(d._body);
        this.source = new LocalDataSource(data.result);
      },
      err => {
        console.error(err);
      }
    )
  }
}
