import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  listOfNames = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPlaylists()
  }


  getPlaylists() {
    return this.http.get('/api/getPlayLists').subscribe(data => {

      console.log("Data: " , data);

      for (let item of data['items']) {
        console.log(item['name']);
      }


    })
  }

}
