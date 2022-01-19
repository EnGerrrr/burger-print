import { PagesModule } from "./../pages/pages.module";
import { PlatformModule } from "./../platform/platform.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-rounting.module";
import { HomeComponent } from "./home.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { NgSelectModule } from "@ng-select/ng-select";
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    PagesModule,
    NgSelectModule,
  ]
})
export class HomeModule {}
