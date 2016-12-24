
class MainController {
  public data: Array<{}>;

  constructor() {
    this.data = [{name: 'test', prenom: 'test'}];
  }
}

export const main  = {
  templateUrl: 'src/app/components/main/main.template.html',
  controller: MainController
};
