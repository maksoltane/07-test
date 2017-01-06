import 'angular-gantt';
import 'angular-moment';
class GanttComponentController  {
 static $inject = ['ApiRestService', 'Gantt'];
}

export const gantt = {
  templateUrl: '/app/components/gantt/gantt.template.html',
   controller: GanttComponentController,
   };
