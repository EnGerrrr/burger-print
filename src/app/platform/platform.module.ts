import { CreateInfoComponent } from "./../create-info/create-info.component";
import { DesignComponent } from "./../design/design.component";
import { FormsModule } from "@angular/forms";
import { PlatformRoutingModule } from "./platform-rounting.module";
import { CampaignComponent } from "./../campaign/campaign.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlatformComponent } from "./platform.component";
import { DashBoardComponent } from "@/dash-board/dash-board.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { ToastrModule } from "ngx-toastr";
import { CreateComponent } from "@/create/create.component";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { OrderComponent } from "@/order/order.component";
import { AbandonedOrderComponent } from "@/order/abandoned-order/abandoned-order.component";
import { AbandonedCheckoutComponent } from "@/report/abandoned-checkout/abandoned-checkout.component";
import { ConversionFunnelComponent } from "@/report/conversion-funnel/conversion-funnel.component";
import { EarningSourceComponent } from "@/report/earning-source/earning-source.component";
import { ProfitComponent } from "@/report/profit/profit.component";
import { SaleInDayComponent } from "@/report/sale-in-day/sale-in-day.component";
import { SaleReportComponent } from "@/report/sale-report/sale-report.component";
import { TopCampaignComponent } from "@/report/top-campaign/top-campaign.component";
import { TopProductsComponent } from "@/report/top-products/top-products.component";
import { NgApexchartsModule } from "ng-apexcharts";
import { NgxPaginationModule } from "ngx-pagination";
import { PaginationModule } from 'ngx-pagination-bootstrap'


@NgModule({
  declarations: [
    PlatformComponent,
    CampaignComponent,
    DashBoardComponent,
    DesignComponent,
    CreateComponent,
    CreateInfoComponent,
    OrderComponent,
    AbandonedOrderComponent,
    AbandonedCheckoutComponent,
    ConversionFunnelComponent,
    EarningSourceComponent,
    ProfitComponent,
    SaleInDayComponent,
    SaleReportComponent,
    TopCampaignComponent,
    TopProductsComponent,
  ],
  imports: [
    CommonModule,
    PlatformRoutingModule,
    FormsModule,
    NgSelectModule,
    ToastrModule.forRoot(),
    CKEditorModule,
    NgApexchartsModule,
    NgxPaginationModule,

  ],
})
export class PlatformModule {}
