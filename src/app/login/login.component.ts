import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthGuard } from '@/_helpers';
import { AlertService, AuthenticationService } from '@/_services';
import { AppConfig } from '@/_configs/app.config';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({selector: 'app-login',
              templateUrl: 'login.component.html',
            styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
    @ViewChild('platform',{static:true}) platform!:ElementRef;
    @ViewChild('fullfillment',{static:true}) fullfillment!:ElementRef;
    valuebutton="Login platform";
    loginForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(private toastr: ToastrService,
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private auth:AuthGuard
    ) {

        // redirect to home if already logged in
       if (this.authenticationService.currentUserValue) {

        this.router.navigate(['/platform/dashboard']);
        }
        else {this.router.navigate(['/login'])}


    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        debugger;


        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.createSession({ email: this.f.email.value, password: this.f.password.value })
        //this.authenticationService.createSession( this.f.email.value,this.f.password.value )

            .subscribe(
                (response) => {
                    console.log(response)
                    this.toastr.success('Login success', '',{
                    timeOut: 1000,
                  });
              console.log(this.authenticationService.currentUser)
               this.router.navigate(['/platform/dashboard'])
                    // this.router.navigate([this.route.snapshot.queryParams['returnUrl'] || '/platform/dashboard']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                    this.toastr.error('The email or password is incorrect','ERROR',{
                        timeOut: 1000
                      })
                });
    }
    changevaluePlatform(){
        this.valuebutton="Login platform";
        this.platform.nativeElement.style.color="#ef911b";
        this.platform.nativeElement.style.borderBottom="2px solid #ef911b";
        this.fullfillment.nativeElement.style.color="black";
        this.fullfillment.nativeElement.style.borderBottom="2px solid gainsboro"
    }
    changevalueFulfillment(){
        this.valuebutton="Login fulfillment";
        this.fullfillment.nativeElement.style.color="#ef911b";
        this.fullfillment.nativeElement.style.borderBottom="2px solid #ef911b";
        this.platform.nativeElement.style.color="black";
        this.platform.nativeElement.style.borderBottom="2px solid gainsboro"

    }
}
