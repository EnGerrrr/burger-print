import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {
  title?;
  message = 'Do you want to confirm?';
  result: Subject<any> = new Subject<any>();

  constructor(public bsModalRef: BsModalRef, ) { }

  ngOnInit() {
  }

  confirm(): void {
    this.result.next(true);
    this.bsModalRef.hide();
  }

  decline(): void {
    this.result.next(false);
    this.bsModalRef.hide();
  }

}
