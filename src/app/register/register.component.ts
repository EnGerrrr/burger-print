import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, UserService, AuthenticationService } from '@/_services';
// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '@/_helpers/must-match.validator';

@Component({  styleUrls: ['./register.component.scss'],
              templateUrl: 'register.component.html'
            })
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    //checked:boolean;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/platform']);
        }
        //this.checked = false;
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            phone: [''],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            cfPassword: ['', [Validators.required]],
            acceptTerms: [false, Validators.requiredTrue]
        }, {
            validator: MustMatch('password', 'cfPassword')
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        const user = {
            email: this.registerForm.value.email,
            phone: this.registerForm.value.phone,
            password: this.registerForm.value.password,
            confirm_password: this.registerForm.value.cfPassword,

        }
        this.userService.register(user)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data)
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    // getTimeZone() {
    //     const timeZoneOffset = new Date().getTimezoneOffset();
    //     let offset = (-1 * timeZoneOffset) / 60;
    //     let timeZone = "UTC" + (offset >= 0 ? "+" + offset : offset);
    //     return timeZone;
    // }
}
