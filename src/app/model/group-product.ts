


export class Category {
  'Printed Apparel': PrintedApparel;
  'Full Printed Apparel': FullPrintedApparel;
  Accessories: Accessories;
  Decoration: Decoration;
  Footwear: Footwear;
  'Home & Living': HomeLiving;
}

export class Accessories {
  bases:[ {
    id: string;
    name: string;
    type: {
      id: string;
      name: string;
    };
    display_name: string;
    desc: string;
    currency: string;
    design_group: string;
    colors: {
      id: string;
      name: string;
      value: string;
      position: string;
    };
    size_price_editable: boolean;
    full_fillment: boolean;
    printable: {
      type?: string;
      printable_top?: string;
      printable_left?: string;
      printable_width?: string;
      printable_height?: string;
      img_url?: string;
      canvas_width?: string;
      canvas_height?: string;
      unit?: string;
    };
    dimension: {
      width: string;
      height: string;
    };
    position: string;
    design_type: string;
    state: string;
    base_short_code: string;
    display: boolean;
    base_size: {
      default_profit: number;
      second_side_price: number;
      base_cost: number;
      name: string;
      dropship_base_cost: number;
      id: string;
    };
    mockup_image_url: string;
    mockup_api: string;
    template_url: string;
    resolution: string;
    price: string;
    catalog_name: string;
    optional_mockup: number;
    processing_time: string;
    is_personalize: boolean;
    is_stretchable: boolean;
    base_cost: string;
    html_desc: string;
    design_template: string;
    size_chart: string;
    shipping_cost_us: string;
    shipping_cost_ww: string;
    shipping_lines: string;
    shipping_time_us: string;
    shipping_time_ww: string;
  }];
  total: number;
}

export class Decoration {
  bases:[{
    id: string;
    name: string;
    type: {
      id: string;
      name: string;
    };
    display_name: string;
    desc: string;
    currency: string;
    design_group: string;
    colors: {
      id: string;
      name: string;
      value: string;
      position: string;
    };
    size_price_editable: boolean;
    full_fillment: boolean;
    printable: {
      type?: string;
      printable_top?: string;
      printable_left?: string;
      printable_width?: string;
      printable_height?: string;
      img_url?: string;
      canvas_width?: string;
      canvas_height?: string;
      unit?: string;
    };
    dimension: {
      width: string;
      height: string;
    };
    position: string;
    design_type: string;
    state: string;
    base_short_code: string;
    display: boolean;
    base_size: {
      default_profit: number;
      second_side_price: number;
      base_cost: number;
      name: string;
      dropship_base_cost: number;
      id: string;
    };
    mockup_image_url: string;
    mockup_api: string;
    template_url: string;
    resolution: string;
    price: string;
    catalog_name: string;
    optional_mockup: number;
    processing_time: string;
    is_personalize: boolean;
    is_stretchable: boolean;
    base_cost: string;
    html_desc: string;
    design_template: string;
    size_chart: string;
    shipping_cost_us: string;
    shipping_cost_ww: string;
    shipping_lines: string;
    shipping_time_us: string;
    shipping_time_ww: string;
  }];
  total: number;
}


export class Footwear {
  bases: [{
    id: string;
    name: string;
    type: {
      id: string;
      name: string;
    };
    display_name: string;
    desc: string;
    currency: string;
    design_group: string;
    colors: {
      id: string;
      name: string;
      value: string;
      position: string;
    };
    size_price_editable: boolean;
    full_fillment: boolean;
    printable: {
      type?: string;
      printable_top?: string;
      printable_left?: string;
      printable_width?: string;
      printable_height?: string;
      img_url?: string;
      canvas_width?: string;
      canvas_height?: string;
      unit?: string;
    };
    dimension: {
      width: string;
      height: string;
    };
    position: string;
    design_type: string;
    state: string;
    base_short_code: string;
    display: boolean;
    base_size: {
      default_profit: number;
      second_side_price: number;
      base_cost: number;
      name: string;
      dropship_base_cost: number;
      id: string;
    };
    mockup_image_url: string;
    mockup_api: string;
    template_url: string;
    resolution: string;
    price: string;
    catalog_name: string;
    optional_mockup: number;
    processing_time: string;
    is_personalize: boolean;
    is_stretchable: boolean;
    base_cost: string;
    html_desc: string;
    design_template: string;
    size_chart: string;
    shipping_cost_us: string;
    shipping_cost_ww: string;
    shipping_lines: string;
    shipping_time_us: string;
    shipping_time_ww: string;
  }];
  total: number;
}


export class FullPrintedApparel {
  bases:[{
    id: string;
    name: string;
    type: {
      id: string;
      name: string;
    };
    display_name: string;
    desc: string;
    currency: string;
    design_group: string;
    colors: {
      id: string;
      name: string;
      value: string;
      position: string;
    };
    size_price_editable: boolean;
    full_fillment: boolean;
    printable: {
      type?: string;
      printable_top?: string;
      printable_left?: string;
      printable_width?: string;
      printable_height?: string;
      img_url?: string;
      canvas_width?: string;
      canvas_height?: string;
      unit?: string;
    };
    dimension: {
      width: string;
      height: string;
    };
    position: string;
    design_type: string;
    state: string;
    base_short_code: string;
    display: boolean;
    base_size: {
      default_profit: number;
      second_side_price: number;
      base_cost: number;
      name: string;
      dropship_base_cost: number;
      id: string;
    };
    mockup_image_url: string;
    mockup_api: string;
    template_url: string;
    resolution: string;
    price: string;
    catalog_name: string;
    optional_mockup: number;
    processing_time: string;
    is_personalize: boolean;
    is_stretchable: boolean;
    base_cost: string;
    html_desc: string;
    design_template: string;
    size_chart: string;
    shipping_cost_us: string;
    shipping_cost_ww: string;
    shipping_lines: string;
    shipping_time_us: string;
    shipping_time_ww: string;
  }];
  total: number;
}


export class HomeLiving {
  bases:[ {
    id: string;
    name: string;
    type: {
      id: string;
      name: string;
    };
    display_name: string;
    desc: string;
    currency: string;
    design_group: string;
    colors: {
      id: string;
      name: string;
      value: string;
      position: string;
    };
    size_price_editable: boolean;
    full_fillment: boolean;
    printable: {
      type?: string;
      printable_top?: string;
      printable_left?: string;
      printable_width?: string;
      printable_height?: string;
      img_url?: string;
      canvas_width?: string;
      canvas_height?: string;
      unit?: string;
    };
    dimension: {
      width: string;
      height: string;
    };
    position: string;
    design_type: string;
    state: string;
    base_short_code: string;
    display: boolean;
    base_size: {
      default_profit: number;
      second_side_price: number;
      base_cost: number;
      name: string;
      dropship_base_cost: number;
      id: string;
    };
    mockup_image_url: string;
    mockup_api: string;
    template_url: string;
    resolution: string;
    price: string;
    catalog_name: string;
    optional_mockup: number;
    processing_time: string;
    is_personalize: boolean;
    is_stretchable: boolean;
    base_cost: string;
    html_desc: string;
    design_template: string;
    size_chart: string;
    shipping_cost_us: string;
    shipping_cost_ww: string;
    shipping_lines: string;
    shipping_time_us: string;
    shipping_time_ww: string;
  }];
  total: number;
}


export class PrintedApparel {
  bases:[ {
    id: string;
    name: string;
    type: {
      id: string;
      name: string;
    };
    display_name: string;
    desc: string;
    currency: string;
    design_group: string;
    colors: {
      id: string;
      name: string;
      value: string;
      position: string;
    };
    size_price_editable: boolean;
    full_fillment: boolean;
    printable: {
      type?: string;
      printable_top?: string;
      printable_left?: string;
      printable_width?: string;
      printable_height?: string;
      img_url?: string;
      canvas_width?: string;
      canvas_height?: string;
      unit?: string;
    };
    dimension: {
      width: string;
      height: string;
    };
    position: string;
    design_type: string;
    state: string;
    base_short_code: string;
    display: boolean;
    base_size: {
      default_profit: number;
      second_side_price: number;
      base_cost: number;
      name: string;
      dropship_base_cost: number;
      id: string;
    };
    mockup_image_url: string;
    mockup_api: string;
    template_url: string;
    resolution: string;
    price: string;
    catalog_name: string;
    optional_mockup: number;
    processing_time: string;
    is_personalize: boolean;
    is_stretchable: boolean;
    base_cost: string;
    html_desc: string;
    design_template: string;
    size_chart: string;
    shipping_cost_us: string;
    shipping_cost_ww: string;
    shipping_lines: string;
    shipping_time_us: string;
    shipping_time_ww: string;
  }];
  total: number;
}
