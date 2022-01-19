﻿import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UserService } from './_services/user.service';
import { RegisterComponent } from "./register/register.component";
import { HomeModule } from "./home/home.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule, FormGroup } from "@angular/forms";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { NgxPermissionsModule } from "ngx-permissions";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { NgxPaginationModule } from "ngx-pagination";
import { LoadingBarHttpClientModule } from "@ngx-loading-bar/http-client";
import { ToastrModule } from "ngx-toastr";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { LSelect2Module } from "ngx-select2";
import { MomentModule } from "ngx-moment";
import { NgxSpinnerModule } from "ngx-spinner";
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { ThemeModule } from "./_components/theme.module";
import { appRoutingModule } from "./app.routing";
import { JwtInterceptor, ErrorInterceptor } from "./_helpers";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./_components/header/header.component";
import { FooterComponent } from "./_components/footer/footer.component";
import { LoginComponent } from './login';

import { NgSelectModule } from "@ng-select/ng-select";
import { CommonModule } from "@angular/common";
import { JwtModule } from "@auth0/angular-jwt";


function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

const ENTRY_COMPONENTS = [];

@NgModule({
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule,
    ThemeModule.forRoot(),
    NgxPermissionsModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    NgxPaginationModule,
    LoadingBarHttpClientModule,
    ToastrModule.forRoot(),

    TooltipModule.forRoot(),
    LSelect2Module,
    MomentModule,
    NgxSpinnerModule,
    NgSelectModule,
    JwtModule,

  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    ForgotPasswordComponent,
  ],
  entryComponents: [],
  providers: [
    BsModalService,
    BsModalRef,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },UserService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
// import { HomeModule } from './home/home.module';
// import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FooterComponent } from './_components/footer/footer.component';
// import { HeaderComponent } from './_components/header/header.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     RegisterComponent,
//     HeaderComponent,
//     FooterComponent,

//   ],
//   imports: [
//     BrowserModule,
//     HomeModule,
//     FormsModule,
//     FormGroup,
//     FormControl,
//     FormBuilder,
//     ReactiveFormsModule

//   ],
//   providers: [
//      BsModalService, BsModalRef,
//         { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
//         { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
