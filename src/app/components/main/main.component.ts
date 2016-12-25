'use strict';
class MainController {
  public text: string;

  constructor() {
    this.text = 'My brand new component main!';
    console.log('init main page ');
  }
}

export const main  = {
  templateUrl: '/app/components/main/main.template.html',
  controller: MainController,
  label: 'Home',
};

