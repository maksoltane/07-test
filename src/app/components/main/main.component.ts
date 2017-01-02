
class MainController {
  static $inject = ['ApiRestService'];
  public data;
  service;
  constructor(ApiRestService: any) {
this.service = ApiRestService;
  }
  getdata(ndf: string): void   {
     console.log('send request to get data from Api Rest');
        this.service.getfilm(ndf)
      .then((idata): void => {
        this.data = idata;
      });
      console.log('Receive data from Api Rest');
  }
}

export const main = {
  templateUrl: '/app/components/main/main.template.html',
  controller: MainController,
};


