import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-create-info',
  templateUrl: './create-info.component.html',
  styleUrls: ['./create-info.component.css']
})
export class CreateInfoComponent implements OnInit {
  public Editor = ClassicEditor;
  USER: {
    url: '';
  };

  people$: string[] = ['30usd.com'];
  Storefront: string[] = [''];
  CategoriesTags: string[] = [''];
  public files: any[];
  selectedPeople = [];
  image: Object;

  constructor(   private http: HttpClient) { 
    this.USER = {
      url: '',
    };
  }

  ngOnInit() {
  }
  onFileChanged(event: any) {
    debugger;
    this.files = event.target.files;
    let formData = new FormData();
    for (let file of this.files) {
      formData.append('file', file, file.name);
    }

    console.log(formData);
    // this.http
    // .post('', formData
     
    // )
    // .subscribe((x:{
    //   fullUrl:string
    // }) => {
    //   this.image = x.fullUrl;
    //   console.log(x);
    //   console.log(x.fullUrl);
    // });
  }
}
