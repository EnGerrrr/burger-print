import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { PagesRoutingModule } from "./pages-routing.module";
import { ProfileComponent } from "./profile/profile.component";
@NgModule({
  imports: [PagesRoutingModule, ReactiveFormsModule, FormsModule, CommonModule],
  declarations: [ProfileComponent],
})
export class PagesModule {}
