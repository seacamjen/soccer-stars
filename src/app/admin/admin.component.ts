import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PlayerService]
})
export class AdminComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  submitAddPlayer(name: string, dob: string, club: string, salary: string, position: string, apps: number, goals: number, assists: number, lastApp: string, image: string) {
    var newPlayer: Player = new Player(name, dob, club, salary, position, apps, goals, assists, lastApp, image);
    this.playerService.addPlayer(newPlayer);
  }

}
