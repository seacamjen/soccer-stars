[![Code Climate](https://codeclimate.com/github/seacamjen/soccer-stars/badges/gpa.svg)](https://codeclimate.com/github/seacamjen/soccer-stars)

# SoccerStars

May 12, 2017

This is your one stop to see all the players that are currently recently on the US Soccer team rosters. You can see stats such as their number of games played, goals, assists and current club. You can sort to see the list of players by the number of apps(games played). Each player also has their own detail page.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

**By Cameron Jensen**

## Configuration / Dependancies
  * One model: Players
  * Model is defined in player.model.ts
  * Player includes 10 attributes: name, date of birth, club, position, apps, goals, assists, salary, last app, image.

## Specs
  1. Behavior: Add New Player
    * Input: Messi, March 2,1988, Barcalona, Forward, 75, 55, 34, 10,000,000, June 7, 2016, http://messiimage.com
    * Ouput:"Messi, March 2,1988, Barcalona, Forward, 75, 55, 34, 10,000,000, June 7, 2016, http://messiimage.com" saved to database
  2. Behavior: View All Players
    * Input: Load Page
    * Ouput: All Players are shown
  3. Behavior: Sort View by Apps
    * Input: Select More than 100
    * Ouput: Players with more than 100 apps are shown
  4. Behavior: Update New Player
    * Input: Messi, March 2,1988, Barcalona, Wing(Forward), 75, 55, 36(34), 10,000,000, June 7, 2016, http://messiimage.com
    * Ouput:"Messi, March 2,1988, Barcalona, Wing, 75, 55, 36, 10,000,000, June 7, 2016, http://messiimage.com" saved to database
  5. Behavior: Delete Player
    * Input: Delete button clicked for player
    * Ouput: Player is removed from database
  6. Behavior: Set up Firebase as database
    * Input: Firebase apikeys set up for database
    * Ouput: Firebase used as database.

## Integration
  * Statice page for Teams and About
  * Dynamic routing set up for Teams players to player profile

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Future Specs
  * Add players for all levels of Teams
  * Add additional player information (previous clubs, market rate, transfer rumors)
  * Add additional sorting pipes (goals, assists, age)
  * Add user ability to report player information

## License

Copyright (c) 2017 **MIT License**
