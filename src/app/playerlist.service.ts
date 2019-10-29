import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerlistService {
  players = [
    { id: '00', name: 'Fakhar zaman' },
    { id: '01', name: 'Imam ul haq' },
    { id: '11', name: 'Babar Azam (c)' },
    { id: '12', name: 'Harris Sohail' },
    { id: '23', name: 'Asif ali ' },
    { id: '34', name: 'Sarfraz ahmed (wk)' },
    { id: '45', name: 'Shadab Khan' },
    { id: '56', name: 'Imad Wasim' },
    { id: '67', name: 'Wahab riaz' },
    { id: '78', name: 'M Amir' },
    { id: '89', name: 'Shaheen Afridi' }
  ];

  constructor() { }
  get getPlayers() {
    return this.players;
  }
  getallplayers() {
    return this.players;
  }
  deletePlayer(id) {
    this.players = this.players.filter(e => {
      return e.id !== id;
    });
}
addNewPlayer(id, name) {
  this.players.push({id, name});
  console.log('player has been added');
}
}
