import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Track } from '../../track';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  playlistName = ""
  playlistID = ""
  listOfTracks = []

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.playlistName = params['name'];
      this.playlistID = params['id'];
    });

    this.getTracks(this.playlistID);

  }

  getTracks(playlistID) {

    return this.http.post('/api/getTracks', {playlistID}).subscribe(data => {

      var tracks = data['tracks']['items'];

      for (let track of tracks) {

        var name = track['track']['name'];
        var artists = this.createArtistString(track['track']['artists']);
        var temp = new Track(name, artists);
        this.listOfTracks.push(temp);
      }
    })
  }


  createArtistString(artists : string[]) {
    
    if (artists.length > 1) {

      var finalString = ""

      for (let artist of artists) {

        finalString = finalString + artist['name'] + " • "

      }

      return finalString.substring(0, finalString.length-3)
      
    } else {

      return artists[0]['name'];
    }
  }

}
