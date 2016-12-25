class CollaborateursController {
  public text1: string;

  constructor() {
    this.text1 = 'My brand new component collaborateurs!';
  }
}

export const collaborateurs = {
  templateUrl: '/app/components/collaborateurs/collaborateurs.template.html',
  controller: CollaborateursController,
};
