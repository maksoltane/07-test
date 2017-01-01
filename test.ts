    get(): ng.IPromise<{}> {
        var self = this;
        var deferred = this.$q.defer();

        this.$http.get('http://www.omdbapi.com/?t=inception&y=&plot=short&r=json&tomatoes=true').then(
            function(response) {
                deferred.resolve(response.data);
            },
            function(errors) {
                self.$log.debug(errors);
                deferred.reject(errors.data);
            }
        );

        return deferred.promise;
    }