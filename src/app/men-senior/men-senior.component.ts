import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-men-senior',
  templateUrl: './men-senior.component.html',
  styleUrls: ['./men-senior.component.css'],
  providers: [PlayerService]
})
export class MenSeniorComponent implements OnInit {
  players: FirebaseListObservable<any[]>;


  constructor(private router: Router, private playerService: PlayerService){}

  ngOnInit() {
    // this.players = this.playerService.getPlayers();
  }

  goToMSPlayerPage(clickedPlayer: Player) {
    // this.router.navigate(['players', clickedPlayer.id]);
  }


}
