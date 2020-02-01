import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  records;
  searchText = '';
  totalRecord = 0;
  totalPage = 0;
  recordPerPage = 50;
  maxPage = 20;
  currentPage = 0;
  pageArr = [];
  pageBufferArr = new Array(this.maxPage);
  recordPerPageArr = [1, 2, 5, 10, 15, 20, 25, 30, 50];

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.getData(this.recordPerPage, this.currentPage, this.searchText).subscribe(data => {
      this.records = data.record;
      this.totalPage = data.totalPage;
      this.totalRecord = data.totalRecord;
      console.log(data.record)
      this.initPage();
    });
  }

  initPage() {
    if (this.pageArr) {
      this.pageArr = [];
    }
    for (let i = 0; i < this.totalPage; i++) {
      this.pageArr.push(i);
    }
    if (this.totalPage <= this.maxPage) {
      this.pageBufferArr = this.pageArr.slice(0, this.totalPage);
    } else {
      this.pageBufferArr = this.pageArr.slice(0, this.maxPage);
    }
    console.log('%c PageArray :' + this.pageArr + ' with length :' + this.pageArr.length, 'color: #00f900');
    console.log('%c PageBufferArray :' + this.pageBufferArr + ' with length :' + this.pageArr.length, 'color: #00f900');
  }

  changeNumber(event: Event) {
    this.recordPerPage = +(event.target as HTMLInputElement).value;
    this.currentPage = 0;
    this.service.getData(this.recordPerPage, this.currentPage, this.searchText).subscribe(data => {
      this.records = data.record;
      this.totalPage = data.totalPage;
      this.totalRecord = data.totalRecord;
      this.initPage();
    });
  }

  onSearch(event: Event) {
    this.searchText = (event.target as HTMLInputElement).value;
    this.service.getData(this.recordPerPage, this.currentPage, this.searchText).subscribe(data => {
      this.records = data.record;
      this.totalPage = data.totalPage;
      this.totalRecord = data.totalRecord;
      this.initPage();
    });
  }

  chagePage(event: Event) {
    const value = (event.target as HTMLDataListElement).innerText; // Get value from DOM
    const cssClass = (event.target as HTMLDataListElement).className.split(' '); //Get CSS classes from DOM
    const isDisabled = cssClass.find(i => i === 'disabled'); //Find class 'disabled'
    if (isDisabled) {
      return;
    }
    if (value === '»') {
      this.currentPage++;
    } else if (value === '«') {
      this.currentPage--;
    } else if (value === '»»') {
      this.currentPage = this.totalPage - 1;
    } else if (value === '««') {
      this.currentPage = 0;
    } else if (!isNaN(parseInt(value, 10))) {
      this.currentPage = parseInt(value, 10) - 1;
    } else {
      return;
    }
    this.service.getData(this.recordPerPage, this.currentPage, this.searchText).subscribe(data => {
      console.log(data);
      this.records = data.record;
      this.totalPage = data.totalPage;
      this.totalRecord = data.totalRecord;
    });
    this.service.applyPagination(this.currentPage, this.totalPage, this.maxPage, this.pageArr, this.pageBufferArr, value);
    // if (this.currentPage > this.pageBufferArr[this.maxPage - 1]
    //   && this.pageBufferArr[this.maxPage - 1] !== this.pageArr[this.totalPage - 1]
    //   && this.totalPage > this.maxPage) {
    //   console.log('Phase 1');
    //   if (this.currentPage === this.totalPage - 1 && value !== '»') {
    //     for (let i = this.maxPage; i < this.totalPage; i++) {
    //       this.pageBufferArr.shift();
    //       this.pageBufferArr.push(this.pageArr[i]);
    //     }
    //     console.log('Phase 2');
    //   } else {
    //     this.pageBufferArr.shift();
    //     this.pageBufferArr.push(this.pageArr[this.currentPage]);
    //     console.log('Phase 3');
    //   }
    // }
    // if (this.currentPage < this.pageBufferArr[0]
    //   && this.pageBufferArr[0] !== this.pageArr[0]
    //   && this.totalPage > this.maxPage) {
    //   console.log('Part 1');
    //   if (this.currentPage === 0 && value !== '«') {
    //     for (let i = this.pageBufferArr[0] - 1; i >= 0; i--) {
    //       this.pageBufferArr.pop();
    //       this.pageBufferArr.unshift(i);
    //     }
    //     console.log('Part 2');
    //   } else {
    //     console.log('Page: ' + this.currentPage);
    //     this.pageBufferArr.pop();
    //     this.pageBufferArr.unshift(this.pageArr[this.currentPage]);
    //     console.log('Part 3');
    //   }
    // }
  }
}
