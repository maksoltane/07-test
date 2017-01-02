

class MainController {
  public message: string;

  constructor() {
    this.message = 'My brand new component main!';
    console.log('init main page ');
  }

  gettous() {
     console.log('get func ');
    this.message = 'helooo getname';
  }
}

export const main  = {
  templateUrl: '/app/components/home/main.template.html',
  controller: MainController,
  };
