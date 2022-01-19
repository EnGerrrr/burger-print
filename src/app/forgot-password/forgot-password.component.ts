import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
User={
  email:""
}
  constructor(private http:HttpClient,private toastr: ToastrService) { }

  ngOnInit() {
  }
  missPass(){
    this.http.post('http://159.65.140.140:8085/tts/api/recover',this.User).subscribe((response)=>
      {console.log(response)

      }),
      error=>{
        this.toastr.error('ERROR')

      }

  }

}
