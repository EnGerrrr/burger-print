import { NotFoundComponent } from './pages/not-found/not-found.component';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

import { LoginComponent } from "./login";
import { RegisterComponent } from "./register";
import { AuthGuard } from "./_helpers";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  { path: "login", component: LoginComponent },
  { path: "forgot-password", component: ForgotPasswordComponent},
  { path: "register", component: RegisterComponent },
  { path: "**", component:NotFoundComponent },
];

export const appRoutingModule = RouterModule.forRoot(routes);
