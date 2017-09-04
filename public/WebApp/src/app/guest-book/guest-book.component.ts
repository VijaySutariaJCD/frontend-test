import { Component, OnInit } from '@angular/core';
import { GuestBookService } from '../providers/guestbookprovider';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { GuestBookWriteComponent, WriteToGuestBookContext } from './guest-book-write/guest-book-write.component';

@Component({
  selector: 'app-guest-book',
  templateUrl: './guest-book.component.html',
  styleUrls: ['./guest-book.component.css'],
  providers: [GuestBookService, Modal]
})
export class GuestBookComponent implements OnInit {
  settings;
  guestbooks;
  constructor(private _GuestBookService: GuestBookService, public modal: Modal) { }

  ngOnInit() {
    this.settings = {
      pager: {
        perPage: 10
      },
      actions: {
        edit: false,
        delete: false,
        add: false,
        filter: false
      },
      attr: { class: "table table-bordered table-hover" },
      columns: {
        phone: {
          title: 'Phone',
          filter: false
        },
        message: {
          title: 'Message',
          filter: false
        }
      }
    };

    this.getGuestBookMessages();

  }

  //Fetch data from server for Guest-Book
  getGuestBookMessages() {
    this._GuestBookService.readGuestBook().subscribe(
      (d) => {
        this.guestbooks = JSON.parse(d._body);
      },
      err => {
        console.error(err);
      }
    );
  }

  //Write new message for Guest-Book
  writeMessage() {
    var dialogRef = this.modal.open(GuestBookWriteComponent, overlayConfigFactory({ phone: '', message: '' }, BSModalContext));

    dialogRef.then(resultPromise => {
      return resultPromise.result
        .then(
        result => { if (result && result._body) this.guestbooks = JSON.parse(result._body) },
        () => console.log('Error in fetching updated guest books')
        );
    });
  }

}
