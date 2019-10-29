import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PlayerlistService } from './../playerlist.service';
@Component({
  selector: 'app-singleplayer',
  templateUrl: './singleplayer.page.html',
  styleUrls: ['./singleplayer.page.scss'],
})
export class SingleplayerPage implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private alertController: AlertController,
              private playerlistService: PlayerlistService) { }
  players = [];

  singlePlayer;

  ngOnInit() {
    this.players = this.playerlistService.getallplayers();
    // this.students = this.studentsListService.getAllStudents();

    this.route.paramMap.subscribe(paramMap => {
      const val = paramMap.get('playerid');

      this.singlePlayer = this.players.find(obj => {
        return obj.id.includes(val);
      });
    });
  }

  async deletePlayer() {
    console.log('deletePlayer', this.singlePlayer);

    const alert = await this.alertController.create({
      header: 'Alert',
      // subHeader: 'Subtitle',
      message: `Are you sure you want to remove ${this.singlePlayer.name}?`,
      // buttons: ['OK']
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.playerlistService.deletePlayer(this.singlePlayer.id);
            this.router.navigateByUrl('/players');
          }
        }
      ]
    });

    alert.present();

}
}
