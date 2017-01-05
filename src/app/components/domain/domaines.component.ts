class DomainController {
  public text: string;

  constructor() {
    this.text = 'My brand new component domaines!!';
    console.log('init domain module');
  }
}

export const Domaines = {
  templateUrl: '/app/components/domain/domaines.template.html',
  controller: DomainController,
 };
