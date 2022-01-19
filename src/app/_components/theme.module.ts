import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxPaginationModule } from 'ngx-pagination';
import { MomentModule } from 'ngx-moment';
import { NgxSpinnerModule } from "ngx-spinner";

import { PagePaginationComponent } from './page-pagination/page-pagination.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

import { FilterDateComponent } from '@/_directive/filter-date/filter-date.component';

const NB_MODULES = [
  ModalModule.forRoot(),
  TooltipModule.forRoot(),
  NgxSpinnerModule
];
const COMPONENTS = [
  PagePaginationComponent,
  ConfirmModalComponent,
  FilterDateComponent,
];
const PIPES = [
];
const ENTRY_COMPONENTS = [
  ConfirmModalComponent
];

@NgModule({
  imports: [FormsModule, CommonModule, NgxPaginationModule, MomentModule, ...NB_MODULES],
  exports: [FormsModule, CommonModule, NgxPaginationModule, MomentModule, ...PIPES, ...COMPONENTS],
  declarations: [...COMPONENTS, ...PIPES],
  entryComponents: [
    ...ENTRY_COMPONENTS,
  ],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [
      ],
    };
  }
}
