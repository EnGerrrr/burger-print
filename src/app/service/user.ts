export interface User {
    id: string;
    email: string;
    publicname: string;
    phonenumber: string;
    language: string;
    timezone: string;
    address: string;
    country: string;
    province: string;
    town: string;
    linkavatar: any;
    password: string;
  }
  export interface userlogin {
    email: string;
    password: string;
  }
  export interface datalogin {
    token: '';
  }
  export interface usersignup {
    email: string;
    password: string;
    confirm_password: string;
    phone: string;
  
  }
  export interface userupdatepassword{
   
    password: '',
    new_password: '',
    confirm_password: '',
  }
  