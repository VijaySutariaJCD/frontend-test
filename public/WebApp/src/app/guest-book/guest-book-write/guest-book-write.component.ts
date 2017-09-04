import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { GuestBookService } from "./../../providers/guestbookprovider";

export class WriteToGuestBookContext extends BSModalContext {
  public phone: number;
  public message: string;
}

@Component({
  selector: 'app-guest-book-write',
  templateUrl: './guest-book-write.component.html',
  styleUrls: ['./guest-book-write.component.css'],
  providers: [GuestBookService]
})

export class GuestBookWriteComponent implements CloseGuard, ModalComponent<WriteToGuestBookContext> {
  context: WriteToGuestBookContext;
  messageList: any;
  constructor(public dialog: DialogRef<WriteToGuestBookContext>, private _GuestBookService: GuestBookService) {
    this.context = dialog.context;
    //dialog.setCloseGuard(this);
  }

  //Save message in guest book
  saveGuestMessage() {
    this._GuestBookService.writeToGuestBook(this.context.phone, this.context.message).subscribe(
      (d) => {
        this.dialog.close(d);
      },
      (err) => console.error(err)
    )
  }

  beforeDismiss(): boolean {
    //this.dialog.close(this.messageList);
    return true;
  }

  beforeClose(): boolean {
    return true;
  }
}
