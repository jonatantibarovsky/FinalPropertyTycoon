import React from 'react';

class FourthText extends React.Component{
    render(){
        return(
            <div>If a player lands on a property/utility that another person owns then they will need to pay the rent for that square. This will be higher if the player who owns
                the property has houses on the property or if the player owns other utilities as well as the one that has been landed on. If a player lands on a property/utility that
                no other players own then they will have the option of buying the property for a given amount. Above the log it will tell you how much the property costs to buy
                and there will be two buttons for yes or no to either buy or not buy the property. If the player decides to not buy the property. Then the property will be put up for
                auction. Here every other player in the game will take it turns to bid for the property. To bid for a propert a player must type how much they want to pay for the
                property and then press the 'Bid' button. This will go back and forth between each player until only one person is left bidding who will then have bought the property
                for whatever the player bid. If a player is low on money they have the option of mortgaging a property so that they do not have to pay rent for owning that property.
                To mortgage a property the player must click on their own properties and then press the 'Mortgage' button which will then put that property on a mortgage. For a player
                to buy houses on a property they must own all of the properties of that colour and there must not be a difference of 1 house between each of the properties. For example
                if a player owns all of the pink properties. They cannot have 4 houses on Skywalker Drive but only 1 house on Rey Lane, however if a player has 3 houses on Rey Lane and
                Wookie Hole then they can buy a 4th house on Skywalker Drive.
            </div>
        )
    }
}
export default FourthText;