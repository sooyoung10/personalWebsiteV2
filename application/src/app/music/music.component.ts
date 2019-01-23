import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Playlist } from '../../playlist';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  listOfPlaylists = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getMyPlaylists()
  }

  getMyPlaylists() {

    return this.http.get('/api/getPlayLists').subscribe(data => {

      for (let item of data['items']) {

        var name = item['name'];
        var url = item['tracks']['href'];
        var id = String(url).substring(37, String(url).length-7);
        var temp = new Playlist(name, id);
        this.listOfPlaylists.push(temp);
      }
    })
  }


  getTracks(playlistID) {

    console.log("hiii")
    console.log(playlistID)

    return this.http.post('/api/getTracks', {playlistID}).subscribe(data => {

      console.log(data)

    })
  }

}
