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
  currentRoute: string = this.router.url;
  filterByApps: string = "all";
  edit = false;

  constructor(private router: Router, private playerService: PlayerService){}

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  goToMSPlayerPage(clickedPlayer) {
    this.router.navigate(['men-seniors', clickedPlayer.$key]);
  }

  onChange(selectedApps) {
    this.filterByApps = selectedApps;
  }

  editStatusChange(){
    this.edit = true;
  }

  editStatusToFalse() {
    this.edit = false;
  }


}
