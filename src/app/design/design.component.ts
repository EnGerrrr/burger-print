import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import * as Product from '@/model/group-product';
import { DataimageService } from '@/service/dataimage.service';
import {  TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { Modelproduct,ModelGroupProduct,typeproduct } from '@/model/type-product-model';
@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  // @ViewChild('allproduct1', { read: ElementRef }) allproduct1: ElementRef;
  modalRef?: BsModalRef;
  closeResult = '';
  namefind: {
    name: string;
  };

  listcardsfind = [];
  type = 0;

  Accessories: Product.Accessories = {
    bases: [
      {
        id: '',
        name: '',
        type: {
          id: '',
          name: '',
        },
        display_name: '',
        desc: '',
        currency: '',
        design_group: '',
        colors: {
          id: '',
          name: '',
          value: '',
          position: '',
        },
        size_price_editable: true,
        full_fillment: true,
        printable: {
          type: '',
          printable_top: '',
          printable_left: '',
          printable_width: '',
          printable_height: '',
          img_url: '',
          canvas_width: '',
          canvas_height: '',
          unit: '',
        },
        dimension: {
          width: '',
          height: '',
        },
        position: '',
        design_type: '',
        state: '',
        base_short_code: '',
        display: true,
        base_size: {
          default_profit: 0,
          second_side_price: 0,
          base_cost: 0,
          name: '',
          dropship_base_cost: 0,
          id: '',
        },
        mockup_image_url: '',
        mockup_api: '',
        template_url: '',
        resolution: '',
        price: '',
        catalog_name: '',
        optional_mockup: 0,
        processing_time: '',
        is_personalize: true,
        is_stretchable: true,
        base_cost: '',
        html_desc: '',
        design_template: '',
        size_chart: '',
        shipping_cost_us: '',
        shipping_cost_ww: '',
        shipping_lines: '',
        shipping_time_us: '',
        shipping_time_ww: '',
      },
    ],
    total: 0,
  };
  Decoration: Product.Decoration = {
    bases: [
      {
        id: '',
        name: '',
        type: {
          id: '',
          name: '',
        },
        display_name: '',
        desc: '',
        currency: '',
        design_group: '',
        colors: {
          id: '',
          name: '',
          value: '',
          position: '',
        },
        size_price_editable: true,
        full_fillment: true,
        printable: {
          type: '',
          printable_top: '',
          printable_left: '',
          printable_width: '',
          printable_height: '',
          img_url: '',
          canvas_width: '',
          canvas_height: '',
          unit: '',
        },
        dimension: {
          width: '',
          height: '',
        },
        position: '',
        design_type: '',
        state: '',
        base_short_code: '',
        display: true,
        base_size: {
          default_profit: 0,
          second_side_price: 0,
          base_cost: 0,
          name: '',
          dropship_base_cost: 0,
          id: '',
        },
        mockup_image_url: '',
        mockup_api: '',
        template_url: '',
        resolution: '',
        price: '',
        catalog_name: '',
        optional_mockup: 0,
        processing_time: '',
        is_personalize: true,
        is_stretchable: true,
        base_cost: '',
        html_desc: '',
        design_template: '',
        size_chart: '',
        shipping_cost_us: '',
        shipping_cost_ww: '',
        shipping_lines: '',
        shipping_time_us: '',
        shipping_time_ww: '',
      },
    ],
    total: 0,
  };
  Footwear: Product.Footwear = {
    bases: [
      {
        id: '',
        name: '',
        type: {
          id: '',
          name: '',
        },
        display_name: '',
        desc: '',
        currency: '',
        design_group: '',
        colors: {
          id: '',
          name: '',
          value: '',
          position: '',
        },
        size_price_editable: true,
        full_fillment: true,
        printable: {
          type: '',
          printable_top: '',
          printable_left: '',
          printable_width: '',
          printable_height: '',
          img_url: '',
          canvas_width: '',
          canvas_height: '',
          unit: '',
        },
        dimension: {
          width: '',
          height: '',
        },
        position: '',
        design_type: '',
        state: '',
        base_short_code: '',
        display: true,
        base_size: {
          default_profit: 0,
          second_side_price: 0,
          base_cost: 0,
          name: '',
          dropship_base_cost: 0,
          id: '',
        },
        mockup_image_url: '',
        mockup_api: '',
        template_url: '',
        resolution: '',
        price: '',
        catalog_name: '',
        optional_mockup: 0,
        processing_time: '',
        is_personalize: true,
        is_stretchable: true,
        base_cost: '',
        html_desc: '',
        design_template: '',
        size_chart: '',
        shipping_cost_us: '',
        shipping_cost_ww: '',
        shipping_lines: '',
        shipping_time_us: '',
        shipping_time_ww: '',
      },
    ],
    total: 0,
  };
  FullPrintedApparel: Product.FullPrintedApparel = {
    bases: [
      {
        id: '',
        name: '',
        type: {
          id: '',
          name: '',
        },
        display_name: '',
        desc: '',
        currency: '',
        design_group: '',
        colors: {
          id: '',
          name: '',
          value: '',
          position: '',
        },
        size_price_editable: true,
        full_fillment: true,
        printable: {
          type: '',
          printable_top: '',
          printable_left: '',
          printable_width: '',
          printable_height: '',
          img_url: '',
          canvas_width: '',
          canvas_height: '',
          unit: '',
        },
        dimension: {
          width: '',
          height: '',
        },
        position: '',
        design_type: '',
        state: '',
        base_short_code: '',
        display: true,
        base_size: {
          default_profit: 0,
          second_side_price: 0,
          base_cost: 0,
          name: '',
          dropship_base_cost: 0,
          id: '',
        },
        mockup_image_url: '',
        mockup_api: '',
        template_url: '',
        resolution: '',
        price: '',
        catalog_name: '',
        optional_mockup: 0,
        processing_time: '',
        is_personalize: true,
        is_stretchable: true,
        base_cost: '',
        html_desc: '',
        design_template: '',
        size_chart: '',
        shipping_cost_us: '',
        shipping_cost_ww: '',
        shipping_lines: '',
        shipping_time_us: '',
        shipping_time_ww: '',
      },
    ],
    total: 0,
  };
  HomeLiving: Product.HomeLiving = {
    bases: [
      {
        id: '',
        name: '',
        type: {
          id: '',
          name: '',
        },
        display_name: '',
        desc: '',
        currency: '',
        design_group: '',
        colors: {
          id: '',
          name: '',
          value: '',
          position: '',
        },
        size_price_editable: true,
        full_fillment: true,
        printable: {
          type: '',
          printable_top: '',
          printable_left: '',
          printable_width: '',
          printable_height: '',
          img_url: '',
          canvas_width: '',
          canvas_height: '',
          unit: '',
        },
        dimension: {
          width: '',
          height: '',
        },
        position: '',
        design_type: '',
        state: '',
        base_short_code: '',
        display: true,
        base_size: {
          default_profit: 0,
          second_side_price: 0,
          base_cost: 0,
          name: '',
          dropship_base_cost: 0,
          id: '',
        },
        mockup_image_url: '',
        mockup_api: '',
        template_url: '',
        resolution: '',
        price: '',
        catalog_name: '',
        optional_mockup: 0,
        processing_time: '',
        is_personalize: true,
        is_stretchable: true,
        base_cost: '',
        html_desc: '',
        design_template: '',
        size_chart: '',
        shipping_cost_us: '',
        shipping_cost_ww: '',
        shipping_lines: '',
        shipping_time_us: '',
        shipping_time_ww: '',
      },
    ],
    total: 0,
  };
  PrintedApparel: Product.PrintedApparel = {
    bases: [
      {
        id: '',
        name: '',
        type: {
          id: '',
          name: '',
        },
        display_name: '',
        desc: '',
        currency: '',
        design_group: '',
        colors: {
          id: '',
          name: '',
          value: '',
          position: '',
        },
        size_price_editable: true,
        full_fillment: true,
        printable: {
          type: '',
          printable_top: '',
          printable_left: '',
          printable_width: '',
          printable_height: '',
          img_url: '',
          canvas_width: '',
          canvas_height: '',
          unit: '',
        },
        dimension: {
          width: '',
          height: '',
        },
        position: '',
        design_type: '',
        state: '',
        base_short_code: '',
        display: true,
        base_size: {
          default_profit: 0,
          second_side_price: 0,
          base_cost: 0,
          name: '',
          dropship_base_cost: 0,
          id: '',
        },
        mockup_image_url: '',
        mockup_api: '',
        template_url: '',
        resolution: '',
        price: '',
        catalog_name: '',
        optional_mockup: 0,
        processing_time: '',
        is_personalize: true,
        is_stretchable: true,
        base_cost: '',
        html_desc: '',
        design_template: '',
        size_chart: '',
        shipping_cost_us: '',
        shipping_cost_ww: '',
        shipping_lines: '',
        shipping_time_us: '',
        shipping_time_ww: '',
      },
    ],
    total: 0,
  };
  cardfind: [
    {
      id: '';
      name: '';
      type: {
        id: '';
        name: '';
      };
      display_name: '';
      desc: '';
      currency: '';
      design_group: '';
      colors: {
        id: '';
        name: '';
        value: '';
        position: '';
      };
      size_price_editable: true;
      full_fillment: true;
      printable: {
        type: '';
        printable_top: '';
        printable_left: '';
        printable_width: '';
        printable_height: '';
        img_url: '';
        canvas_width: '';
        canvas_height: '';
        unit: '';
      };
      dimension: {
        width: '';
        height: '';
      };
      position: '';
      design_type: '';
      state: '';
      base_short_code: '';
      display: true;
      base_size: {
        default_profit: 0;
        second_side_price: 0;
        base_cost: 0;
        name: '';
        dropship_base_cost: 0;
        id: '';
      };
      mockup_image_url: '';
      mockup_api: '';
      template_url: '';
      resolution: '';
      price: '';
      catalog_name: '';
      optional_mockup: 0;
      processing_time: '';
      is_personalize: true;
      is_stretchable: true;
      base_cost: '';
      html_desc: '';
      design_template: '';
      size_chart: '';
      shipping_cost_us: '';
      shipping_cost_ww: '';
      shipping_lines: '';
      shipping_time_us: '';
      shipping_time_ww: '';
    }
  ];
  Group: Product.Category;
  Dataselectproduct: [];
  listcards = [];
  groupcards = [];
  GroupCards = [];
  listnamegroup: string[] = [];
  Typeproducts:Modelproduct[];
  // Typeproducts: Modelproduct[] = [
  //   {
  //     catalog_name: 'All Products',
  //     TYPE: typeproduct.Allproducts,
  //     actived: true,
  //     total: 0,
  //   },
  //   {
  //     catalog_name: 'Printed Apparel',
  //     TYPE: typeproduct.PrintedApparel,
  //     actived: false,
  //     total: 0
  //   },
  //   {
  //     catalog_name: 'Full Printed Apparel',
  //     TYPE: typeproduct.FullPrintedApparel,
  //     actived: false,
  //     total: 0,
  //   },
  //   {
  //     catalog_name: 'Accessories',
  //     TYPE: typeproduct.Accessories,
  //     actived: false,
  //     total: 0,
  //   },
  //   {
  //     catalog_name: 'Decoration',
  //     TYPE: typeproduct.Decoration,
  //     actived: false,
  //     total: 0,
  //   },
  //   {
  //     catalog_name: 'Footwear',
  //     TYPE: typeproduct.Footwear,
  //     actived: false,
  //     total: 0,
  //   },
  //   {
  //     catalog_name: 'Home & Living',
  //     TYPE: typeproduct.HomeLiving,
  //     actived: false,
  //     total: 0,
  //   },
  // ];
  typeclick = 0;
  arrayName = new Array();
  Name: any;

  constructor(
    // private modalService: NgbModal,
    private modalService: BsModalService,
    private ElementRef: ElementRef,
    private dataimageservice: DataimageService
  ) {
    this.namefind = {
      name: '',
    };
    let data = JSON.stringify(this.dataimageservice.dataproduct);
    this.Group = JSON.parse(data);
    let totalall =
      this.Group.Accessories.total +
      this.Group.Decoration.total +
      this.Group['Footwear'].total +
      this.Group['Full Printed Apparel'].total +
      this.Group['Home & Living'].total +
      this.Group['Printed Apparel'].total;
    this.Typeproducts = [
      {
        catalog_name: 'All Products',
        TYPE: typeproduct.Allproducts,
        actived: true,
        total: totalall,
      },
      {
        catalog_name: 'Printed Apparel',
        TYPE: typeproduct.PrintedApparel,
        actived: false,
        total: this.Group['Printed Apparel'].total,
      },
      {
        catalog_name: 'Full Printed Apparel',
        TYPE: typeproduct.FullPrintedApparel,
        actived: false,
        total: this.Group['Full Printed Apparel'].total,
      },
      {
        catalog_name: 'Accessories',
        TYPE: typeproduct.Accessories,
        actived: false,
        total: this.Group.Accessories.total,
      },
      {
        catalog_name: 'Decoration',
        TYPE: typeproduct.Decoration,
        actived: false,
        total: this.Group.Decoration.total,
      },
      {
        catalog_name: 'Footwear',
        TYPE: typeproduct.Footwear,
        actived: false,
        total: this.Group.Footwear.total,
      },
      {
        catalog_name: 'Home & Living',
        TYPE: typeproduct.HomeLiving,
        actived: false,
        total: this.Group['Home & Living'].total,
      },
    ];
  }

  ngOnInit(): void {
  
    this.groupcards = [
      this.Group['Printed Apparel'].bases,
      this.Group['Full Printed Apparel'].bases,
      this.Group.Accessories.bases,
      this.Group.Decoration.bases,
      this.Group.Footwear.bases,
      this.Group['Home & Living'].bases,
    ];

    this.listnamegroup = [
      'Printed Apparel',
      'Full Printed Apparel',
      'Accessories',
      'Decoration',
      'Footwear',
      'Home & Living',
    ];
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  searchfindProduct() {
 
    this.groupcards = [
      this.Group['Printed Apparel'].bases,
      this.Group['Full Printed Apparel'].bases,
      this.Group.Accessories.bases,
      this.Group.Decoration.bases,
      this.Group.Footwear.bases,
      this.Group['Home & Living'].bases,
    ];


    this.listcardsfind = [];

    switch (this.typeclick) {
      case 0: {
        for (let index = 0; index < this.groupcards.length; index++) {
          this.cardfind = this.groupcards[index].filter((x) =>
            x.name.toLowerCase().includes(this.namefind.name.toLowerCase())
          );
          this.listcardsfind.push(this.cardfind)
          
          // this.groupcards[index].bases = this.cardfind;
       
        }
        this.groupcards=this.listcardsfind
      
        break;
      }
      case 1: {
        this.cardfind = this.groupcards[0].filter((x) =>
          x.name.toLowerCase().includes(this.namefind.name.toLowerCase())
        );
        if(this.cardfind!=null&& this.cardfind.length>0){
          this.Name=this.cardfind[0].catalog_name
        }
        else{this.Name=''}
        this.listcards = this.cardfind;
        break;
      }
      case 2: {
        this.cardfind = this.groupcards[1].filter((x) =>
          x.name.toLowerCase().includes(this.namefind.name.toLowerCase())
        );
        if(this.cardfind!=null&& this.cardfind.length>0){
          this.Name=this.cardfind[0].catalog_name
        }
        else{this.Name=''}
        this.listcards = this.cardfind;
      
        break;
      }
      case 3: {
        this.cardfind = this.groupcards[2].filter((x) =>
          x.name.toLowerCase().includes(this.namefind.name.toLowerCase())
        );
        if(this.cardfind!=null&& this.cardfind.length>0){
          this.Name=this.cardfind[0].catalog_name
        }
        else{this.Name=''}
        this.listcards = this.cardfind;
        break;
      }
      case 4: {
        this.cardfind = this.groupcards[3].filter((x) =>
          x.name.toLowerCase().includes(this.namefind.name.toLowerCase())
        );
        if(this.cardfind!=null&& this.cardfind.length>0){
          this.Name=this.cardfind[0].catalog_name
        }
        else{this.Name=''}
        this.listcards = this.cardfind;
        break;
      }
      case 5: {
        this.cardfind = this.groupcards[4].filter((x) =>
          x.name.toLowerCase().includes(this.namefind.name.toLowerCase())
        );
        if(this.cardfind!=null&& this.cardfind.length>0){
          this.Name=this.cardfind[0].catalog_name
        }
        else{this.Name=''}
        this.listcards = this.cardfind;
        break;
      }
      case 6: {
        this.cardfind = this.groupcards[5].filter((x) =>
          x.name.toLowerCase().includes(this.namefind.name.toLowerCase())
        );
        if(this.cardfind!=null&& this.cardfind.length>0){
          this.Name=this.cardfind[0].catalog_name
        }
        else{this.Name=''}
        this.listcards = this.cardfind;
        
        break;
      }
    }
  
  }

  findtypeProduct(Typeproduct: number) {

    for (let index = 0; index < this.Typeproducts.length; index++) {
      if (this.Typeproducts[index].TYPE == Typeproduct) {
        this.Typeproducts[index].actived = true;
      } else {
        this.Typeproducts[index].actived = false;
      }
    }
    this.typeclick = Typeproduct;
    switch (Typeproduct) {
      case typeproduct.Accessories: {
        this.listcards = this.Group.Accessories.bases;
        if (this.Group.Accessories.bases.length > 0) {
          this.Name = this.Group.Accessories.bases[0].catalog_name;
        } else {
          this.Name = '';
        }
        break;
      }
      case typeproduct.Decoration: {
        this.listcards = this.Group.Decoration.bases;
        if (this.Group.Decoration.bases.length > 0) {
          this.Name = this.Group.Decoration.bases[0].catalog_name;
        } else {
          this.Name = '';
        }
        break;
      }
      case typeproduct.Footwear: {
        this.listcards = this.Group.Footwear.bases;
        if (this.Group.Footwear.bases.length > 0) {
          this.Name = this.Group.Footwear.bases[0].catalog_name;
        } else {
          this.Name = '';
        }
        break;
      }
      case typeproduct.FullPrintedApparel: {
        this.listcards = this.Group['Full Printed Apparel'].bases;
        if (this.Group['Full Printed Apparel'].bases.length > 0) {
          this.Name = this.Group['Full Printed Apparel'].bases[0].catalog_name;
        } else {
          this.Name = '';
        }

        break;
      }
      case typeproduct.HomeLiving: {
        this.listcards = this.Group['Home & Living'].bases;
        if (this.Group['Home & Living'].bases.length > 0) {
          this.Name = this.Group['Home & Living'].bases[0].catalog_name;
        } else {
          this.Name = '';
        }
        break;
      }
      case typeproduct.PrintedApparel: {
        this.listcards = this.Group['Printed Apparel'].bases;
        if (this.Group['Printed Apparel'].bases.length > 0) {
          this.Name = this.Group['Printed Apparel'].bases[0].catalog_name;
        } else {
          this.Name = '';
        }
        break;
      }
    }
  }

  // openScrollableContent(longContent) {
  //   this.modalService.open(longContent, { scrollable: true });
  // }
  
  // open(content) {
  //   this.modalService
  //     .open(content, { ariaLabelledBy: 'modal-basic-title' })
  //     .result.then(
  //       (result) => {
  //         this.closeResult = `Closed with: ${result}`;
  //       },
  //       (reason) => {
  //         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //       }
  //     );
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }
}