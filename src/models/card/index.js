// redux state
import store from '../../redux/index'

import { adjustPlayerPosition, getMoney,
        pay, addToFreeParking,
        addOpportunityJailcard, addPotluckJailcard,
        goToJail } from '../../redux/actions/game'


class Card {

    /**
     * 
     * @param text - Card text
     * @param method - Method number
     */
    constructor(text, method) {
        this.text = text
        this.method = method

    }

    /**
     *  Adjusts a Player object's position to a specific position according to the card text
     * 
     * @param player - Player object id
     */
    adjustPosition = (player) => {
        if (this.text === 'Go back to Crapper Street') {
            store.dispatch(adjustPlayerPosition(player, 1))
        } else if (this.text === 'Advance to GO') {
            store.dispatch(adjustPlayerPosition(player, 0))
            store.dispatch(getMoney(player, 200))
        } else if (this.text === 'Advance to Turing Heights') {
            store.dispatch(adjustPlayerPosition(player, 39))
        } else if (this.text === 'Go back 3 spaces') {
            const oldPosition = player.position
            const newPosition = oldPosition - 3
            store.dispatch(adjustPlayerPosition(player, newPosition))
        }
    }

    /**
     *  Player object pays money to the bank according to the card text
     * 
     * @param player - Player object id
     */
    pay = (player) => {
        if (this.text === 'Pay bill for text books of £100') {
            store.dispatch(pay(player, 100))
        } else if (this.text === 'Mega late night taxi bill pay £50') {
            store.dispatch(pay(player, 50))
        } else if (this.text === 'Pay insurance fee of £150') {
            store.dispatch(pay(player, 150))
        } else if (this.text === 'Fined £15 for speeding') {
            store.dispatch(pay(player, 15))
            store.dispatch(addToFreeParking(15))
        } else if (this.text === 'Pay university fees of £150') {
            store.dispatch(pay(player, 150))
        } else if (this.text === 'Drunk in charge of skateboard. Fine £20') {
            store.dispatch(pay(player, 20))
            store.dispatch(addToFreeParking(20))
        }
    }

    /**
     *  Player objects money increases by the amount shown on the card text
     * 
     * @param player - Player object id
     */
    increaseMoney = (player) => {
        if (this.text === 'You inherit £100') {
            store.dispatch(getMoney(player, 100))
        } else if (this.text === 'You have won 2nd prize in a beauty contest, collect £20') {
            store.dispatch(getMoney(player, 20))
        } else if (this.text === 'Student loan refund. Collect £20') {
            store.dispatch(getMoney(player, 20))
        } else if (this.text === 'Bank error in your favour. Collect £200') {
            store.dispatch(getMoney(player, 200))
        } else if (this.text === 'From sale of Bitcoin you get £50') {
            store.dispatch(getMoney(player, 50))
        } else if (this.text === 'Savings bond matures, collect £100') {
            store.dispatch(getMoney(player, 100))
        } else if (this.text === 'Received interest on shares of £25') {
            store.dispatch(getMoney(player, 25))
        } else if (this.text === 'Bank pays you divided of £50') {
            store.dispatch(getMoney(player, 50))
        } else if (this.text === 'You have won a lip sync battle. Collect £100') {
            store.dispatch(getMoney(player, 100))
        } else if (this.text === 'Loan matures, collect £150') {
            store.dispatch(getMoney(player, 150))
        }
    }

    /**
     *  Add jail card to player object
     * 
     * @param player - Player object id
     */
    addJailCard = (player) => {
        if (this.text === 'Get out of jail free / Opportunity') {
            store.dispatch(addOpportunityJailcard(player))
        } else if (this.text === 'Get out of jail free / Potluck') {
            store.dispatch(addPotluckJailcard(player))
        }
    }

    /**
     *  Move player object to jail
     * 
     * @param player - Player object id
     */
    goToJail = (player) => {
        ('go to jail from card class')
        store.dispatch(goToJail(player))
    }

    /**
     *  Advances player to a specific position according to the card text and check if
     *  moving the player makes them pass GO, if they pass GO they get 200 pounds.
     * 
     * @param player - Player object id
     */
    advanceIfPassGo = (player) => {
        if (this.text === 'Advance to Han Xin Gardens. If you pass GO, collect £200') {
            if (player.position < 25) {
                store.dispatch(getMoney(player.id, 200))
            }
            store.dispatch(adjustPlayerPosition(player.id, 24))
        } else if (this.text === 'Take a trip to Hove Station. If you pass GO, collect £200') {
            if (player.position < 6) {
                store.dispatch(getMoney(player.id, 200))
            }
            store.dispatch(adjustPlayerPosition(player.id, 5))
        } else if (this.text === 'Advance to Skywalker Drive. If you pass GO collect £200') {
            if (player.position < 12) {
                store.dispatch(getMoney(player.id, 200))
            }
            store.dispatch(adjustPlayerPosition(player.id, 11))
        }
    }

    /**
     *  Executes the right function according to the Card object's method attribute
     * 
     * @param card - card object
     * @param playerID - player object id
     * @param player - Player object
     */
    checkMethod = (card, playerID, player) => {
        switch (card.method) {
            case 1:
                this.adjustPosition(playerID)
                break
            case 2:
                this.pay(playerID)
                break
            case 3:
                this.increaseMoney(playerID)
                break
            case 4:
                this.addJailCard(playerID)
                break
            case 5:
                this.goToJail(playerID)
            case 6:
                this.advanceIfPassGo(player)
            default:
                break
        }
    }
}

export default Card