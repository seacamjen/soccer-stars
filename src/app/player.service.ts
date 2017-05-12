import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.players = database.list('players');
  }

  getPlayers() {
    return this.players;
  }

  addPlayer(newPlayer: Player) {
    this.players.push(newPlayer);
  }

  getPlayerById(playerId: string) {
    return this.database.object('players/' + playerId)
  }

  updatePlayer(playerToUpdate) {
    var playerInDatabase = this.getPlayerById(playerToUpdate.$key);
    playerInDatabase.update({
                            name: playerToUpdate.name,
                            dob: playerToUpdate.dob,
                            club: playerToUpdate.club,
                            salary: playerToUpdate.salary,
                            position: playerToUpdate.position,
                            apps: playerToUpdate.apps,
                            goals: playerToUpdate.goals,
                            assists: playerToUpdate.assists,
                            lastApp: playerToUpdate.lastApp,
                            image: playerToUpdate.image
    });
  }

  deletePlayer(playerToDelete) {
    var playerInDatabase = this.getPlayerById(playerToDelete.$key);
    playerInDatabase.remove();
  }

}
