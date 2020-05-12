import React from 'react';

class SecondText extends React.Component{
    render(){
        return(
            <div>To Start a game start by clicking the 'Play' button. This will bring you to a screen which will allow you to choose how many players you would like to play with.
                This will be any number from 2 to 6. Once you have chosen how many players you would like to play with, each player will have to choose an icon which will represent
                themself. At the top of the screen you will see which player needs to choose their icon. Once all players have chosen their icon then the main screen for the game will
                now show. You will see that every player begins at the bottom right corner of the grid on the 'Go' square. You will also see on the right of the grid a red box 
                containing a list of the players, their money and a button 'Properties' next to a players money. Pressing this will display what properties this player has purchased.
                In the middle of the grid you will see 2 buttons, a text showing which player's turn it is and the general log of what has happened in the current game.
            </div>
        )
    }
}
export default SecondText;