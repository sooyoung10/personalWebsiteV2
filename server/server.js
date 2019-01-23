const express = require('express');
const bodyParser = require('body-parser');
var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
  clientId: '633e2f1012604ec88e90476285a2862e',
  clientSecret: 'ff3645d4f02947289c67e24ba1778375'});

const app = express();

app.use(bodyParser.json());



app.get('/api/getPlayLists', (req, res) => {

	spotifyApi.clientCredentialsGrant().then(function(data) {

	    spotifyApi.setAccessToken(data.body['access_token']);

	    spotifyApi.getUserPlaylists('1254470963').then(function(data) {

		    res.send(data.body);

		},function(err) {
		    console.log('Something went wrong!', err);
		});
  	}, function(err) {
        console.log('Something went wrong when retrieving an access token', err);
    });

});


app.post('/api/getTracks', (req, res) => {

	//playlistID = req.body['playlistID'];

	spotifyApi.clientCredentialsGrant().then(function(data) {

	    spotifyApi.setAccessToken(data.body['access_token']);

	    spotifyApi.getPlaylist('3xxnAuJ8yHmU0duv2vykJN').then(function(data) {

		    res.send(data.body);

		},function(err) {
		    console.log('Something went wrong!', err);
		});
  	}, function(err) {
        console.log('Something went wrong when retrieving an access token', err);
    });

});





app.listen(1234, () => console.log("Server listening at 1234"));