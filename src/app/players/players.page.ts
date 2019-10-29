import { Component, OnInit } from '@angular/core';
import {PlayerlistService} from '../playerlist.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {

  constructor(
    private router: Router,
    private playerlistservice: PlayerlistService
  ) { }
  players = [];

  ngOnInit() {
     this.players = this.playerlistservice.getallplayers();
   }
   ionViewDidEnter() {
    console.log('view Enter');
    this.players = this.playerlistservice.getallplayers();
  }
  changeUrl(user) {
    const id = user.id.substring(0, 4);
    const url = `players/${id}`;

    this.router.navigateByUrl(url);
  }
}
