import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getData(num: number, page: number, search: string) {
    return this.http.get<any>(`http://localhost:4250/data?num=${num}&page=${page}&search=${search}`);
  }
  applyPagination(
    currentPage: number,
    totalPage: number, maxPage: number,
    pageArr: Array<number>,
    pageBufferArr: Array<number>,
    DOMValue: string) {
    if (currentPage > pageBufferArr[maxPage - 1]
      && pageBufferArr[maxPage - 1] !== pageArr[totalPage - 1]
      && totalPage > maxPage) {

      /** Check if current page value is more than last element of page buffer array
       * and last element of page buffer array is not equal to page array's
       * and total page is more than max page
        */

      if (currentPage === totalPage - 1 && DOMValue !== '»') {

        /** Check if current page reach last page and click '»»' (Last) button */

        for (let i = pageBufferArr[maxPage - 1] + 1; i < totalPage; i++) {

          /** Set i value from last element of page buffer array to total page
           * Remove first element of page buffer array
           * Add element to last index of array
           */

          pageBufferArr.shift();
          pageBufferArr.push(pageArr[i]);
        }
      } else {
        /** Remove first element of page buffer array
         * Add element to last index of array
         */
        pageBufferArr.shift();
        pageBufferArr.push(pageArr[currentPage]);
      }
    }
    if (currentPage < pageBufferArr[0]
      && pageBufferArr[0] !== pageArr[0]
      && totalPage > maxPage) {

        /** Check if current page is less than first element of page buffer array
         * and first element of page buffer array is not equal to page array's
         * and total page is more than max page
         */

      if (currentPage === 0 && DOMValue !== '«') {

        /** Check if current page reach first page and click '««' (First) button */

        for (let i = pageBufferArr[0] - 1; i >= 0; i--) {

          /** Set i value from first element of page buffer array to 0
           * Remove last element of page buffer array
           * Add element to first index of page buffer array
          */

          pageBufferArr.pop();
          pageBufferArr.unshift(i);
        }
      } else {

        /**  Remove last element of page buffer array
         * Add element to first index of page buffer array
        */

        pageBufferArr.pop();
        pageBufferArr.unshift(pageArr[currentPage]);
      }
    }
  }
}
