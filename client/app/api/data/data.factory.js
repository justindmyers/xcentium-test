let DataApiFactory = ($http, $q, $sce) => {
    'ngInject';

    let Users = () => {
        let url = 'https://jsonplaceholder.typicode.com/users';
        let trustedUrl = $sce.trustAsResourceUrl(url);

        return $http.jsonp(trustedUrl, {
            jsonpCallbackParam: 'callback'
        });
    };

    let Posts = () => {
        let url = 'https://jsonplaceholder.typicode.com/posts';
        let trustedUrl = $sce.trustAsResourceUrl(url);

        return $http.jsonp(trustedUrl, {
            jsonpCallbackParam: 'callback'
        });
    };

    let Audio = () => {
        let deferred = $q.defer();
        let samples = [{
            title: 'Synth Organ',
            url: 'https://static.bandlab.com/soundbanks/previews/synth-organ.ogg'
        }, {
            title: 'New Wave Synth',
            url: 'https://static.bandlab.com/soundbanks/previews/new-wave-kit.ogg'
        }];

        let trustedSamples = samples.map(sample => {
            return {
                title: sample.title,
                url: $sce.trustAsResourceUrl(sample.url)
            };
        });

        // return a fake promise with the data
        deferred.resolve(trustedSamples);

        return deferred.promise;
    };

    return {
        Users,
        Posts,
        Audio
    };
};

export default DataApiFactory;