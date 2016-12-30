'use strict';
class MainController {
 static $inject = ['ApiRestService'];
  public data;
  constructor(public ApiRestService: any ) {
    this.data = ApiRestService.loadData() ;
    console.log('init main page data');
  }
}

export const main  = {
  templateUrl: '/app/components/main/main.template.html',
  controller: MainController,
};

