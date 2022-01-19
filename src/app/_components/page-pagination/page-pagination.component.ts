import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'page-pagination',
  templateUrl: './page-pagination.component.html',
  styleUrls: ['./page-pagination.component.css']
})
export class PagePaginationComponent implements OnInit, OnDestroy {

  @Input() templateId = 'custom_page';
  @Input() templateClass = 'full-screen';
  @Input() totalItems = 0;
  @Input() currentRow = 50;
  @Output() pageChange = new EventEmitter<any>();
  @Output() rowChange = new EventEmitter<any>();

  currentPage = 1;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.currentRow = 50;
    this.currentPage = 1;
  }

  change(page) {
    this.currentPage = page;
    this.pageChange.emit({ page: page });
  }

  setRows(numRow) {
    this.currentRow = numRow;
    this.pageChange.emit({ page: 1, showRow: numRow });
  }
}
