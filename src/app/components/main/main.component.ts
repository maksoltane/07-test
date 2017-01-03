import 'ng-table';

    interface INgTableChildScope extends IScope {
        params: NgTableParams<any>;
        $columns: ColumnDef[];
    }

class MainController {
  static $inject = ['ApiRestService', 'NgTableParams'];
  public data;
  APIservice;
  constructor(ApiRestService: any) {
this.APIservice = ApiRestService;
  }
  getdata(ndf: string): void   {
     console.log('send request to get data from Api Rest');
        this.APIservice.getfilm(ndf)
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


