import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-men-senior-detail',
  templateUrl: './men-senior-detail.component.html',
  styleUrls: ['./men-senior-detail.component.css'],
  providers: [PlayerService]
})
export class MenSeniorDetailComponent implements OnInit {
  playerId;
  playerToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private playerService: PlayerService
  ) { }

  ngOnInit() {
  //   this.route.params.forEach((urlParameters) => {
  //    this.albumId = parseInt(urlParameters['id']);
  //  });
  }

}
