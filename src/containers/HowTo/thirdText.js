import React from 'react';

class ThirdText extends React.Component{
    render(){
        return(
            <div>For a player to play their turn, they must first press the 'Roll Dice' button. Here they could land on one of the different types of squares. This could be housing,
                a utility, an opportunity square, a pot luck square, a tax square, a jail square or the free parking square. Each of these mean different things. 
                For more information on housing or a utility then click the 'Game Properties' button. An opportunity or pot luck square will mean you draw a card from one of the
                two decks of cards. These cards contain things such as giving money to a player, taking money from a player, going to jail, get out of jail free and so on.
                A tax square will mean a certain amount of money will be taken out of a players balance. The jail square is an empty square which you can be stuck on if you are
                actually sent to jail rather than just landing on jail, however landing on the 'Go To Jail' square will mean you are stuck in jail. To get out of jail the player will
                have to either wait 3 turns or the player will need to pay 50 on any of the 3 turns they skip. If a player lands on the free parking square they then take all the 
                money that was in the pot from people paying for parking. Once the player has done everything they can/want to do in a turn they must press 'End Turn' so the next
                player can begin their turn.</div>
        )
    }
}
export default ThirdText;