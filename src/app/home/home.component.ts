import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "@/_services";
import { Router } from "@angular/router";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  name: "";
  constructor(private Authentication:AuthenticationService,private router:Router) {}

  ngOnInit() {}
  logout() {
    localStorage.removeItem('currentUser');

    this.Authentication.currentUserSubject.next(null);
    this.router.navigate(['/login'])
  }
}
