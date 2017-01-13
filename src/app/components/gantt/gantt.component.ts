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
    Datastate: Boolean = false;
    data: Array<{}>;
    JsonFeries: Array<{}> = [
        {
            'libelle': 'Noël',
            'date': '01/02/2017'
        },
    ];

// gant configuration 
    headersFormats = {
        month: 'MMMM YYYY',
        week: '[Semaine] w',
        day: 'D',
    };
    dateFrames = this.ParseResolveDataDayOff(this.JsonFeries);

    timeFrames = {
        closed: {
            working: false // we don't work when it's closed
        }
    };
    GetMonthBegin = moment();
    GetMonthEnd = moment().add(1, 'month').add(1, 'day');

    constructor(private ApiRestService: any) { }

    // converts  received data "Jourferies" from service REST to un object readable by gantt dateFrames  to show holiday in calendar 
    ParseResolveDataDayOff(param: any) {
        console.log(' ParseResolveDataDayOff');
        let dateframes: any = {
            weekend: {
                evaluator: function (date: any) { // a custom function evaluated for each day in the gantt
                    return date.isoWeekday() === 6 || date.isoWeekday() === 7;
                },
                targets: ['closed'] // use timeFrame named closed for saturday and sunday.
            }
        };
        angular.forEach(param, (dayoff, ind) => {
            let _dayoff = new Dayoff(moment(dayoff.date, 'DD/MM/YYYY'), ['closed']);
            dateframes[1 + ind] = _dayoff;
        });
        return dateframes;
    }
    // converts  received data  from service REST to un object "collaborateurs" readable by gantt calendar
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

 // sent a query to receive data "collaborateurs" from Api REST 
    CowrkerData(Routeparam: string): void {
        console.log('GetDataforGantt ' + Routeparam);
        this.ApiRestService.GetdatafromREST(Routeparam)
            .then((data): void => {
                this.data = this.ParseResolveDataCoworker(data);
                 console.log('Datastate true');
                this.Datastate = true;
            });
    }


}

export const gantt = {
    templateUrl: 'src/app/components/gantt/gantt.template.html',
    controller: GanttComponentController,
};
