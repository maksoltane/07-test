class DomainContractController {
  public text1: string;

  constructor() {
    this.text1 = 'My brand new component Domaincontract!';
    console.log('init domain contract module');
  }

}

export const DomainContract = {
  templateUrl: '/app/components/domaincontract/domaincontract.template.html',
  controller: DomainContractController,
  };
