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
class GanttComponentController {
    static $inject = ['ApiRestService'];
    data: Array<{}>;
    dateFrames = {
        JourFerier: {
            date: moment('2017-01-30', 'YYYY-MM-DD'), // a specific date
            targets: ['closed'] // use timeFrame named day for halloween. We won't close for noon.
        },

        weekend: {
            evaluator: function (date: any) { // a custom function evaluated for each day in the gantt
                return date.isoWeekday() === 6 || date.isoWeekday() === 7;
            },
            targets: ['closed'] // use timeFrame named closed for saturday and sunday.
        }
    };

    timeFrames = {
        closed: {
            magnet: false, // this will disable magnet snapping
            working: false // we don't work when it's closed
        }
    };
    // tslint:disable:no-empty
    GetMonthBegin = moment();
    GetMonthEnd = moment().add(1, 'month').add(1, 'day');

    constructor(private ApiRestService: any) { }

    ParseResolveForgantt(resolve: any): any {
        if (!resolve) { return null; };
        let _coworkers = [];
        console.log(' ParseResolveForgantt');
        angular.forEach(resolve, (coworker, ind) => {
            let _coworker = new Coworker(coworker.id, `${coworker.ressourcePrenom} ${coworker.ressourceNom}`, coworker.ressourceNom, coworker.ressourcePrenom, coworker.occupations, coworker.lienOPP);
            _coworkers.push(_coworker);
        });
        return _coworkers;
    }

    GetDataforGantt(ndf: string): void {
        console.log('GetDataforGantt ' + ndf);
        this.ApiRestService.GetdatafromREST(ndf)
            .then((data): void => {
                this.data = this.ParseResolveForgantt(data);
            });
    }

    loadData = function () {
        console.log('test onload');
    };

}

export const gantt = {
    templateUrl: 'src/app/components/gantt/gantt.template.html',
    controller: GanttComponentController,
};
