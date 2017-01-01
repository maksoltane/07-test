class CollaborateursController {
  public text1: string;

  constructor() {
    this.text1 = 'My brand new component collaborateurs!';
    console.log('init collaborateurs page');
  }
  getdata() {
    console.log('rechere film');
  }
}

export const collaborateurs = {
  templateUrl: '/app/components/collaborateurs/collaborateurs.template.html',
  controller: CollaborateursController,
  label: 'Hello colaborateur',
};
