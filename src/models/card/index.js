// redux state
import store from '../../redux/index'

import { adjustPlayerPosition, getMoney,
        pay, addToFreeParking,
        addOpportunityJailcard, addPotluckJailcard } from '../../redux/actions/game'

class Card {
    constructor(text, method) {
        this.text = text
        this.method = method
    }

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

    addJailCard = (player) => {
        if (this.text === 'Get out of jail free / Opportunity') {
            store.dispatch(addOpportunityJailcard(player))
        } else if (this.text === 'Get out of jail free / Potluck') {
            store.dispatch(addPotluckJailcard(player))
        }
    }

    checkMethod = (card, player) => {
        switch (card.method) {
            case 1:
                this.adjustPosition(player)
                break
            case 2:
                this.pay(player)
                break
            case 3:
                this.increaseMoney(player)
                break
            case 4:
                this.addJailCard(player)
                break
            default:
                break
        }
    }
}

export default Card