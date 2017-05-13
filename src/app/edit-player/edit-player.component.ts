import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
  providers: [PlayerService]
})
export class EditPlayerComponent implements OnInit {
  @Input() selectedPlayer;
  @Output() changeEdit = new EventEmitter;
  positions: SelectItem[];
  selectedCity: string;

  constructor(private playerService: PlayerService) {
    this.positions = [];
    this.positions.push({label:'Keeper', value:'Keeper'});
    this.positions.push({label:'Center Back', value:'Center Back'});
    this.positions.push({label:'Full Back', value:'Full Back'});
    this.positions.push({label:'Wing', value:'Wing'});
    this.positions.push({label:'Center Midfield', value:'Center Midfield'});
    this.positions.push({label:'Forward', value:'Forward'});
  }

  ngOnInit() {
  }

  updatePlayer(playerToUpdate) {
    this.playerService.updatePlayer(playerToUpdate);
    this.changeEdit.emit();
  }

  deletePlayer(playerToDelete){
    if(confirm("Are you sure you want to delete this player?")){
      this.playerService.deletePlayer(playerToDelete);
    }
  }

}
