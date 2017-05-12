import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';

@Pipe({
  name: 'sortApps',
  pure: false
})
export class SortAppsPipe implements PipeTransform {

  transform(input: Player[], gamesPlayed){
    var output: Player[] = [];
    if(gamesPlayed === "beginner") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].apps < 25) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (gamesPlayed === "intermediate") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].apps >= 25 && input[i].apps <=55) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (gamesPlayed === "advanced") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].apps >= 56 && input[i].apps <=99) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (gamesPlayed === "expert") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].apps > 100) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
