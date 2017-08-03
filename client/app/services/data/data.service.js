let DataService = ($q, DataApi) => {
    'ngInject';

    let posts = [];

    // Save the posts so that the ajax call isn't hit on every route change
    let getPosts = () => {
        let deferred = $q.defer();
        let users = [];

        if(posts.length) {
            deferred.resolve(posts);
        } else {
            DataApi.Users().then(usersResponse => {
                users = usersResponse.data;

                DataApi.Posts().then(postsResponse => {
                    posts = postsResponse.data;

                    users.forEach((user) => {
                        posts.filter(post => {
                            return post.userId === user.id;
                        }).forEach(post => {
                            post.user = user;
                        });

                    });

                    deferred.resolve(posts);
                });    
            });
        }
    
        return deferred.promise;
    };

    // We're not concerned with saving the audio data here since it's a faked call
    let getAudio = () => {
        return DataApi.Audio().then(response => {
            return response;
        });
    }

    return {
        getPosts,
        getAudio
    };
};

export default DataService;