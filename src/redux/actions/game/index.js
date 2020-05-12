export const CHANGE_CURRENT_PLAYER = 'CHANGE_CURRENT_PLAYER'
export const SET_DICE = 'SET_DICE'
export const CHANGE_PLAYERS_NUMBER = 'CHANGE_PLAYERS_NUMBER'
export const UPDATE_PLAYER_POSITION = 'UPDATE_PLAYER_POSITION'
export const ADJUST_PLAYER_POSITION = 'ADJUST_PLAYER_POSITION'
export const SHOW_BUY_MODAL = 'SHOW_BUY_MODAL'
export const HIDE_BUY_MODAL = 'HIDE_BUY_MODAL'
export const SHOW_AUCTION_MODAL = 'SHOW_AUCTION_MODAL'
export const HIDE_AUCTION_MODAL = 'HIDE_AUCTION_MODAL'
export const PAY = 'PAY'
export const GET_MONEY = 'GET_MONEY'
export const SET_ROLLED_TRUE = 'SET_ROLLED_TRUE'
export const SET_ROLLED_FALSE = 'SET_ROLLED_FALSE'
export const SET_AUCTION_PLAYERS = 'SET_AUCTION_PLAYERS'
export const CLEAR_AUCTION_PLAYERS = 'CLEAR_AUCTION_PLAYERS'
export const REMOVE_AUCTION_PLAYER = 'REMOVE_AUCTION_PLAYER'
export const ADD_TO_FREE_PARKING = 'ADD_TO_FREE_PARKING'
export const ADD_POTLUCK_JAILCARD = 'ADD_POTLUCK_JAILCARD'
export const ADD_OPPORTUNITY_JAILCARD = 'ADD_OPPORTUNITY_JAILCARD'
export const REMOVE_POTLUCK_JAILCARD = 'REMOVE_POTLUCK_JAILCARD'
export const REMOVE_OPPORTUNITY_JAILCARD = 'REMOVE_OPPORTUNITY_JAILCARD'
export const ADD_LOG = 'ADD_LOG'
export const GO_TO_JAIL = 'GO_TO_JAIL'
export const BUY_HOUSE = 'BUY_HOUSE'
export const RESET_AUCTION = 'RESET_AUCTION'
export const GET_FREE_PARKING_MONEY = 'GET_FREE_PARKING_MONEY'
export const CHANGE_SETUP_INDEX = 'CHANGE_SETUP_INDEX'
export const SET_ICON = 'SET_ICON'
export const RESET = 'RESET'
export const CHANGE_GAMEMODE = 'CHANGE_GAMEMODE'
export const COUNT_FUNDS = 'COUNT_FUNDS'

export const countFunds = () => {
	return {
		type: COUNT_FUNDS
	}
}

export const changeGamemode = (gamemode) => {
	return {
		type: CHANGE_GAMEMODE,
		gamemode: gamemode
	}
}

export const reset = () => {
	return {
		type: RESET
	}
}

export const setIcon = (player, icon) => {
	return {
		type: SET_ICON,
		player: player,
		icon: icon
	}
}

export const changeSetupIndex = (index) => {
	return {
		type: CHANGE_SETUP_INDEX,
		index: index
	}
}

export const getFreeParkingMoney = (player) => {
	return {
		type: GET_FREE_PARKING_MONEY,
		player: player
	}
}

export const resetAuction = () => {
	return {
		type: RESET_AUCTION
	}
}

export const buyHouse = (player, property) => {
	return {
		type: BUY_HOUSE,
		player: player,
		property: property
	}
}

export const goToJail = (player) => {
	return {
		type: GO_TO_JAIL,
		player: player
	}
}

export const addLog = (message) => {
	return {
		type: ADD_LOG,
		message: message
	}
}

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

export const adjustPlayerPosition = (playerID, position) => {
	return {
		type: ADJUST_PLAYER_POSITION,
		playerID: playerID,
		position: position
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
		value: value
	}
}

export const getMoney = (playerID, value) => {
	return {
		type: GET_MONEY,
		playerID: playerID,
		value: value
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

export const addToFreeParking = (value) => {
	return {
		type: ADD_TO_FREE_PARKING,
		value: value
	}
}

export const addPotluckJailcard = (player) => {
	return {
		type: ADD_POTLUCK_JAILCARD,
		player: player
	}
}

export const addOpportunityJailcard = (player) => {
	return {
		type: ADD_OPPORTUNITY_JAILCARD,
		player: player
	}
}

export const removePotluckJailcard = (player) => {
	return {
		type: REMOVE_POTLUCK_JAILCARD,
		player: player
	}
}

export const removeOpportunityJailcard = (player) => {
	return {
		type: REMOVE_OPPORTUNITY_JAILCARD,
		player: player
	}
}