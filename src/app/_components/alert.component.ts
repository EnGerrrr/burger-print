import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ToastrService } from 'ngx-toastr';
import { AlertService } from '@/_services';

@Component({ selector: 'alert', templateUrl: 'alert.component.html' })
export class AlertComponent implements OnInit, OnDestroy {
    private subscription: Subscription;

    constructor(
        private alertService: AlertService,
        private toastr: ToastrService
    ) { }

    ngOnInit() {
        this.subscription = this.alertService.getAlert()
            .subscribe(message => {
                switch (message && message.type) {
                    case 'success':
                        this.toastr.success(message.text, 'Successfully!', message.option);
                        break;
                    case 'error':
                        this.toastr.error(message.text, 'Error!', message.option);
                        break;
                }
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}