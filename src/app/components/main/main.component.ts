
import moment from 'moment';
import 'moment/locale/fr';
class MainController {
  static $inject = ['ApiRestService'];
  public data: Array<{}>;

  currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
  constructor(private ApiRestService: any) {
     }

  getdata(ndf: string): void {
    console.log('send request to get ' + ndf + ' data from Api Rest');
    this.ApiRestService.getfilm(ndf)
      .then((idata): void => {
        this.data = idata;
      });
  }
}

export const main = {
  templateUrl: '/app/components/main/main.template.html',
  controller: MainController,
};


