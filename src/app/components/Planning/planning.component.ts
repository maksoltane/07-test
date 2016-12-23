class PlanningController {
  public data: Array<{}>;

  constructor() {
    this.data = [{name: 'test', prenom: 'test'}];
  }
}

export const planning = {
  templateUrl: 'src/app/components/planning.template.html',
  controller: PlanningController
};

