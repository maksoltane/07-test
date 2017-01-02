class MainController {
  static $inject = ['ApiRestService'];
  public data;
  service;
  // tslint:disable-next-line:no-empty
  constructor(ApiRestService: any) {
this.service = ApiRestService;
  }
  getdata(ndf: string) {
        this.service.getfilm(ndf)
      .then((idata): void => {
        this.data = idata;
      });
      return this.data;
  }
}

export const main = {
  templateUrl: '/app/components/main/main.template.html',
  controller: MainController,
};
