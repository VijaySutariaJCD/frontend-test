import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ViewCell } from 'ng2-smart-table';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'app-staterender',
  templateUrl: './staterender.component.html',
  styleUrls: ['./staterender.component.css'],
  providers: [Modal]
})
export class StaterenderComponent implements OnInit, ViewCell {

  renderValue: string;
  @Input() value: string;
  @Input() rowData: any;

  constructor(private router: Router, public modal: Modal) { }

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  viewdetails() {
    this.modal.alert()
      .size('lg')
      .showClose(true)
      .title('State Details')
      .body(`
      <form>
      <div class="row">
        <div class="form-group">      
          <div class="col-md-2"><label>Name</label></div>
          <div class="col-md-3">`+ this.rowData["name"] + `</div>
         </div>
        <div class="form-group">      
          <div class="col-md-3"><label>Abbreviation</label></div>
          <div class="col-md-3">`+ this.rowData["abbreviation"] + `</div>
        </div>
      </div>

      <div class="row">
        <div class="form-group">
          <div class="col-md-2"><label>Capital</label></div>
          <div class="col-md-3">`+ this.rowData["capital"] + `</div>
        </div>
        <div class="form-group">
          <div class="col-md-3"><label>Most Populous City</label></div>
          <div class="col-md-3">`+ this.rowData["most-populous-city"] + `</div>
        </div>
      </div>

      <div class="row">
      <div class="form-group">
        <div class="col-md-2"><label>Population</label></div>
        <div class="col-md-3">`+ this.rowData["population"] + `</div>
      </div>
      <div class="form-group">
        <div class="col-md-3"><label>Square Miles</label></div>
        <div class="col-md-3">`+ this.rowData["square-miles"] + `</div>
      </div>
    </div>     
    
    
    <div class="row">
      <div class="form-group">
        <div class="col-md-2"><label>Time Zone 1</label></div>
        <div class="col-md-3">`+ this.rowData["time-zone-1"] + `</div>
      </div>
      <div class="form-group">
        <div class="col-md-3"><label>Time Zone 2</label></div>
        <div class="col-md-3">`+ this.rowData["time-zone-2"] + `</div>
      </div>
    </div>      

  <div class="row">
    <div class="form-group">
      <div class="col-md-2"><label>DST</label></div>
      <div class="col-md-3">`+ this.rowData["dst"] + `</div>
    </div>
  </div>  
      </form>      
      `)
      .open();
  }
}
