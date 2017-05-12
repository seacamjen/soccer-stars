import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-men-senior-detail',
  templateUrl: './men-senior-detail.component.html',
  styleUrls: ['./men-senior-detail.component.css'],
  providers: [PlayerService]
})
export class MenSeniorDetailComponent implements OnInit {
  playerId: string;
  playerToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
       this.playerId = urlParameters['id'];
     });
     this.playerService.getPlayerById(this.playerId).subscribe(recentData => {
       this.playerToDisplay = new Player(
                                          recentData.name,
                                          recentData.dob,
                                          recentData.club,
                                          recentData.salary,
                                          recentData.position,
                                          recentData.apps,
                                          recentData.goals,
                                          recentData.assists,
                                          recentData.lastApp,
                                          recentData.image
       )
     })
    //  this.playerToDisplay = this.playerService.getPlayerById(this.playerId);
  }

}
