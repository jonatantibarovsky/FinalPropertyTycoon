export const CHANGE_CURRENT_PLAYER = 'CHANGE_CURRENT_PLAYER'
export const SET_DICE = 'SET_DICE'
export const CHANGE_PLAYERS_NUMBER = 'CHANGE_PLAYERS_NUMBER'
export const UPDATE_PLAYER_POSITION = 'UPDATE_PLAYER_POSITION'
export const SHOW_BUY_MODAL = 'SHOW_BUY_MODAL'
export const HIDE_BUY_MODAL = 'HIDE_BUY_MODAL'
export const SHOW_AUCTION_MODAL = 'SHOW_AUCTION_MODAL'
export const HIDE_AUCTION_MODAL = 'HIDE_AUCTION_MODAL'
export const PAY = 'PAY'
export const SET_ROLLED_TRUE = 'SET_ROLLED_TRUE'
export const SET_ROLLED_FALSE = 'SET_ROLLED_FALSE'
export const SET_AUCTION_PLAYERS = 'SET_AUCTION_PLAYERS'
export const CLEAR_AUCTION_PLAYERS = 'CLEAR_AUCTION_PLAYERS'
export const REMOVE_AUCTION_PLAYER = 'REMOVE_AUCTION_PLAYER'

export const changeCurrentPlayer = () => {
    return {
        type: CHANGE_CURRENT_PLAYER
    }
}

export const setDice = (dice) => {
    return {
        type: SET_DICE,
        dice
    }
}

export const changePlayersCount = (number) => {
	return {
		type: CHANGE_PLAYERS_NUMBER,
		number: number
	}
}

export const updatePlayerPosition = (playerID, value) => {
	return {
		type: UPDATE_PLAYER_POSITION,
		value: value,
		playerID: playerID
	}
}

export const showBuyModal = () => {
	return {
		type: SHOW_BUY_MODAL
	}
}

export const hideBuyModal = () => {
	return {
		type: HIDE_BUY_MODAL
	}
}

export const showAuctionModal = () => {
	return {
		type: SHOW_AUCTION_MODAL
	}
}

export const hideAuctionModal = () => {
	return {
		type: HIDE_AUCTION_MODAL
	}
}

export const pay = (playerID, value) => {
	return {
		type: PAY,
		playerID: playerID,
		value, value
	}
}

export const setRolledTrue = () => {
	return {
		type: SET_ROLLED_TRUE
	}
}

export const setRolledFalse = () => {
	return {
		type: SET_ROLLED_FALSE
	}
}

export const setAuctionPlayers = () => {
	return {
		type: SET_AUCTION_PLAYERS
	}
}

export const removeAuctionPlayer = (playerID) => {
	return {
		type: REMOVE_AUCTION_PLAYER,
		playerID: playerID
	}
}

export const clearAuctionPlayers = () => {
	return {
		type: CLEAR_AUCTION_PLAYERS
	}
}