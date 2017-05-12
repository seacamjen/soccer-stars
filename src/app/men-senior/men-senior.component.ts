import { Component } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-men-senior',
  templateUrl: './men-senior.component.html',
  styleUrls: ['./men-senior.component.css']
})
export class MenSeniorComponent {

  constructor(private router: Router){}

  goToMSPlayerPage(clickedPlayer: Player) {
    this.router.navigate(['players', clickedPlayer.id]);
  }

  players: Player[] = [
    new Player("Jozy Altidore", "01/01/1987", "Toronto FC", "1.2M", "Forward", 79, 35, 23, "03/15/2017", "https://cdn.ussoccerplayers.com/images/2014/01/jozy-altidore.jpg"),
    new Player("Michael Bradley", "01/01/1986", "Toronto FC", "5.0M", "Midfield", 102, 12, 34, "03/15/2017", "https://pmcfootwearnews.files.wordpress.com/2015/10/michael-bradley-us-soccer-puma.jpg?w=683")
  ];

}
