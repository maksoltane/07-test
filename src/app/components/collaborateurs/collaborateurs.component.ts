class CollaborateursController {
  public text: string;

  constructor() {
    this.text = 'My brand new component collaborateurs!';
  }
}

export const collaborateurs = {
  templateUrl: '/app/components/domaines/domaines.template.html',
  controller: CollaborateursController
};
