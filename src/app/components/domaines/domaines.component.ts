class DomainesController {
  public text: string;

  constructor() {
    this.text = 'My brand new component domaines!!';
    console.log('init domaines page');
  }
}

export const domaines = {
  templateUrl: '/app/components/domaines/domaines.template.html',
  controller: DomainesController,
  label: 'collaborateur',
};
