class BreadcrumbsController {
  public text1: string;
 public update : any;

  constructor() {
    this.text1 = 'My brand new component collaborateurs!';
    this.update = crumble.update;
  }
 
}

export const Breadcrumbs = {
  templateUrl: '/app/components/breadcrumbs/breadcrumbs.template.html',
  controller: BreadcrumbsController,
};
