class PlanningController {
  public text: string;

  constructor() {
    this.text = 'My brand new component!';
  }
}

export const planning = {
  templateUrl: 'src/app/planning.template.html',
  controller: PlanningController
};

