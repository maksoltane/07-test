
class GanttComponentController  {
 static $inject = ['ApiRestService', 'Gantt'];
}

export const navbar = {
  templateUrl: '/app/components/gantt/gantt.template.html',
   controller: GanttComponentController,
   };
