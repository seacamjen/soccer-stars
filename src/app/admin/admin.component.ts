import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PlayerService]
})
export class AdminComponent implements OnInit {
  positions: SelectItem[];
  selectedCity: string;
  display: boolean = false;

  constructor(private playerService: PlayerService) {
    this.positions = [];
    this.positions.push({label:'Select Position', value:null});
    this.positions.push({label:'Keeper', value:'Keeper'});
    this.positions.push({label:'Center Back', value:'Center Back'});
    this.positions.push({label:'Full Back', value:'Full Back'});
    this.positions.push({label:'Wing', value:'Wing'});
    this.positions.push({label:'Center Midfield', value:'Center Midfield'});
    this.positions.push({label:'Forward', value:'Forward'});
  }

  ngOnInit() {
  }

  showDialog() {
    this.display = true;
  }

  submitAddPlayer(name: string, dob: any, club: string, salary: string, position: string, apps: number, goals: number, assists: number, lastApp: string, image: string) {
    console.log(dob);
    var newPlayer: Player = new Player(name, dob, club, salary, position, apps, goals, assists, lastApp, image);
    this.playerService.addPlayer(newPlayer);
  }

}
