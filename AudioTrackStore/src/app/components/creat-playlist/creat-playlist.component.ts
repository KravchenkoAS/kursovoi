import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creat-playlist',
  templateUrl: './creat-playlist.component.html',
  styleUrls: ['./creat-playlist.component.css']
})
export class CreatPlaylistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openCreatPlaylistPage(event){
    console.log(event);
    // document.location.href = "/create-playlist";
  }

}
