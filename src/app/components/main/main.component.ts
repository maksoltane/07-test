class MainController {
  public text: string;

  constructor() {
    this.text = 'My brand new component domaines!';
  }
}

export const main  = {
  templateUrl: '/app/components/main/main.template.html',
  controller: MainController
};


