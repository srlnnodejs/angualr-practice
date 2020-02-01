# Angular Pagination Playground

This is a pagination project using Angular and Bootstrap (did not use ng-bootstrap).

## Frontend

There are variables that responsible for pagination such as:

- records: Store records that retrieved from server
- searchtext: Search text
- totalRecord: Total record
- totalPage: Total page, equal to total records divided by record per page
- RecordPerPage: Record amount per page
- maxPage: Max size of paginator
- currentPage: Current page
- pageArr: Array that keep actual page number
- pageBufferArr: Array that use for display page number
- recordPerPageArr: Array that use in Record Amount Dropdown

The methods that responsible for pagination include:

- getData: take 3 arguments, record per page, page number, and search text, respectively
- applyPagination: take 5 arguments, current page, total page, page array, page buffer array, and DOM value, respectively
- initPage: can be found in component, use for page initialization
- chageNumber: can be found in component, change record per page value and re-init page
- changePage: can be found in component, change page by checking inner text whether it's a number or string, also check if button has css class disabled

## Backend

An API will get 3 query parameters such as:

- num: Record per page
- page: Page that want to navigate
- search: Search text

Search condition will function if search param is not null or undefined or empty.

## Further Note

This is my way to do pagination without using third-party library like ng-bootstrap.

You can implement in your own better way to reduce complexity of code, better performance, and security.
