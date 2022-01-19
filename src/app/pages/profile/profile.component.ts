import { userupdatepassword } from '@/service/user';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { User} from '@/_models';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { UserViewModel } from '@/service/usermodel';
import { Userupdaterequest } from '@/model/userupdaterequest';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from '@/service/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user!: UserViewModel;
  linkavatar = new FormData();
   @ViewChild('changepassword1',{static:true}) changepassword1!: ElementRef;
  @ViewChild('changeinfocolor',{static:true}) changeinfocolor!: ElementRef;
  @ViewChild('oldpassword',{static:true}) oldpassword!: ElementRef;
  @ViewChild('newpassword',{static:true}) newpassword!: ElementRef;
  @ViewChild('confirmnewpassword',{static:true}) confirmnewpassword!: ElementRef;
  USER!: User;
  Passwordold!: string;
  userpassword!: userupdatepassword;
  email:string;
  satustmessage={
    message:""
  }
  constructor(private http:HttpClient,
    private toastr: ToastrService,private userservice:UserService) {
    
    // let userlocal=JSON.parse(localStorage.getItem('user'));
    // console.log(userlocal);
    // this.email=userlocal.email;
    // console.log(this.email)
    
    this.userpassword = {
    
      password: "",
      new_password: "",
      confirm_password:""
    };
   }

  ngOnInit() {
  }
   changecolorinfo() {
    this.changeinfocolor.nativeElement.style.color = '#fd7e14';
    this.changeinfocolor.nativeElement.style.borderBottom = '1px solid #fd7e14';
    this.changepassword1.nativeElement.style.color = '#666';
    this.changepassword1.nativeElement.style.borderBottom = '1px solid white';
  
  }
  changepasswordcolor() {
    this.changepassword1.nativeElement.style.color = '#fd7e14';
    this.changepassword1.nativeElement.style.borderBottom  = '1px solid #fd7e14';
    this.changeinfocolor.nativeElement.style.color = '#666';
    this.changeinfocolor.nativeElement.style.borderBottom  = '1px solid white';
  
  }
  updatepassword() {
    
    let user={
       email:this.email,
       password: this.userpassword.password,
       new_password: this.userpassword.new_password,
       confirm_password:this.userpassword.confirm_password
     };
     
     this.http
       .put('http://159.65.140.140:8085/tts/api/change-pass' , user)
       .subscribe((response) => {
         console.log(response);
         let a=JSON.stringify(response);
         console.log(a);
         let b=(JSON.parse(a)).message;
         console.log(b)
 
       this.toastr.info(b,'Message')},
         (error)=>{
           console.log(error);
          
         });
       console.log(user)
   }
   changetypeoldpass() {
     if (this.oldpassword.nativeElement.type == 'password') {
       this.oldpassword.nativeElement.type = 'text';
     } else this.oldpassword.nativeElement.type == 'password';
   }
   changetypenewpass() {
     if (this.newpassword.nativeElement.type == 'password') {
       this.newpassword.nativeElement.type = 'text';
     } else this.newpassword.nativeElement.type == 'password';
   }
   changetypeconfirm() {
     if (this.confirmnewpassword.nativeElement.type == 'password') {
       this.confirmnewpassword.nativeElement.type = 'text';
     } else this.confirmnewpassword.nativeElement.type == 'password';
   }
   Updateinfo() {
    let request: Userupdaterequest = {
      address: this.user.address,
      email: this.user.email,
      phone: this.user.phone,
      userName: this.user.userName
    }
    // this.userservice
    //   .updateuser(this.userservice.iduser, request)
    //   .subscribe((data) => console.log(data));

    // this.userservice.changeUserProfile(true);
    this.userservice.updateUserProfile.next(true);
  }
  Onchangefile($event: any) {
    var files = $event.target.files[0];
    for (let i = 0; i < files.lenght; i++) {
      this.linkavatar.append('files', files[i], files[i]['name']);
    }
  }
  Upload() {
    this.http
      .post('', this.linkavatar)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
