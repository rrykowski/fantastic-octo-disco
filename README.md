# Games App

The Games App presently houses a Rock, Paper, Scissors (RPS) game. The url structure is presently:

/      => /games
/games => The entrypoint for the app which will list all games available to play

/games/rps => The list of all RPS games that have been played. From here you can view the stats for a game or launch a new one
/games/rps/new => The new game page - this is where we'll load the javascript and allow a game to be played
/games/rps/:id => This shows the stats of a past game

For now, focus on building out the desired HTML for these 4 different urls
Next, look at adding your game logic into the `app/assets/javascripts/games/rps.js` file

Once the mechanics and design are in place for that side of things, we'll work on adding the necessary controller logic (running behind the firewall on the server) to handle saving a game. We could also look at the possibility of making some parts of the game (such as allowing another user to play from a separate browser) to the server side.
