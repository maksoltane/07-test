class TestController {
  public text: string;

  constructor() {
    this.text = 'My brand new component!';
  }
}

export const test = {
  templateUrl: 'src/app/test.html',
  controller: TestController
};

