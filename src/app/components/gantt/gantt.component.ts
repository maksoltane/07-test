import moment from 'moment';
import * as angular from 'angular';

class Coworker {
    constructor(
        public id: number,
        public name: string,
        public Nom: string,
        public Prenom: string,
        public occupations: any,
        public lien_opp: boolean,
    ) {
    }
}


class Dayoff {
    constructor(
        public date: any,
        public targets: Array<string>,
    ) {
    }
}
class GanttComponentController {
    static $inject = ['ApiRestService'];
    data: Array<{}>;
    dayoff: any;
JsonFeries: Array<{}> = [
    {
        'libelle': 'Noël',
        'date': '01/02/2017'
    },
    {
        'libelle': 'Nouvel an',
        'date': '23/01/2017'
    },
    {
        'libelle': '8 mai 1945',
        'date': '16/01/2017'
    }
];


 headersFormats = {
            month: 'MMMM YYYY',
            week: '[Semaine] w',
            day: 'D',
        };
dateFrames = this.ParseResolveDataDayOff(this.JsonFeries);

    timeFrames = {
        closed: {
            magnet: false, // this will disable magnet snapping
            working: false // we don't work when it's closed
        }
    };
   endtest = moment().format() + moment().daysInMonth();
    GetMonthBegin = moment();
    GetMonthEnd = moment().add(1, 'month').add(1, 'day');

    constructor(private ApiRestService: any) { }
test() {
   console.log('end test' + this.endtest);
   console.log('getbegin' + this.GetMonthBegin);
   console.log('getend' + this.GetMonthEnd);
}

ParseResolveDataDayOff(param: any) {
        console.log(' ParseResolveDataDayOff');
        let dateframes: any = {        weekend: {
            evaluator: function (date: any) { // a custom function evaluated for each day in the gantt
                return date.isoWeekday() === 6 || date.isoWeekday() === 7;
            },
            targets: ['closed'] // use timeFrame named closed for saturday and sunday.
        }};
        angular.forEach(param, (dayoff, ind) => {
           let _dayoff =  new Dayoff (moment(dayoff.date , 'DD/MM/YYYY'), ['closed']);
           dateframes[1 + ind] = _dayoff;
        });
        return dateframes;
}
    ParseResolveDataCoworker(resolve: any): any {
        if (!resolve) { return null; };
        let _coworkers = [];
        console.log(' ParseResolveForgantt');
        angular.forEach(resolve, (coworker, ind) => {
            let _coworker = new Coworker(coworker.id, `${coworker.ressourcePrenom} ${coworker.ressourceNom}`, coworker.ressourceNom, coworker.ressourcePrenom, coworker.occupations, coworker.lienOPP);
            _coworkers.push(_coworker);
        });
        return _coworkers;
    }

    GetDataforGantt(param: string): void {
        console.log('GetDataforGantt ' + param);
        this.ApiRestService.GetdatafromREST(param)
            .then((data): void => {
                this.data = this.ParseResolveDataCoworker(data);
            });
    }


}

export const gantt = {
    templateUrl: 'src/app/components/gantt/gantt.template.html',
    controller: GanttComponentController,
};
