angular.module('spotifyApp', [])
    .controller('MainCtrl', function ($scope, $http) {
    $scope.search = function(movieForm) {
        // var req = {
        //     method: 'POST',
        //     url: "https://accounts.spotify.com/api/token",
        //     headers: {
        //         'Content-Type':'application/x-www-form-urlencoded',
        //         'Authorization':'Basic MGZkYmUyZmRmMWY0NDQ2ODgyMDZjN2MyNTk1OWQyZGY6YmUwYjI2ZWI4NjI2NDhiMTlkNzE0ZmUzMmEzODBhNjE='
        //     },
        //     data: {'grant_type':'client_credentials'}
        // }
        // console.log(req);
        // $http(req).then(function(res) {
            var req2 = {
                method: 'GET',
                url: "https://api.spotify.com/v1/search?q=" + movieForm.movieName + "&type=album&limit=3",
                headers: {
                    'Authorization':'Bearer BQCYSxpy_mNqKFOdTMwzkEZnjGscSyr3Uw1-lz6Xm3PxrjU-3Uxa_S5F6nE70Ff3BlZqK9NsZdnuNdvQ0AM'
                }
            }
            $http(req2)
        .then(function (response) {
            $('#results').empty();
            response['data']['albums']['items'].forEach((elem, index) => {
                console.log(elem);
                var html = `<div>
                    <a href='` + elem['external_urls']['spotify'] + `' target="_blank"><img src="` + elem['images'][index]['url'] + `" width='30%'></a>
                    <br>
                    <h4>` + elem['name'] + `</h4>
                </div><br>`
                $('#results').append(html);
            })
        })
        //})
        
    }
})