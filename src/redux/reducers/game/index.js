import { CHANGE_CURRENT_PLAYER, SET_DICE, 
		CHANGE_PLAYERS_NUMBER, UPDATE_PLAYER_POSITION,
		SHOW_BUY_MODAL, HIDE_BUY_MODAL,
		SHOW_AUCTION_MODAL, HIDE_AUCTION_MODAL,
		PAY, SET_ROLLED_TRUE,
		SET_ROLLED_FALSE, SET_AUCTION_PLAYERS,
		CLEAR_AUCTION_PLAYERS, REMOVE_AUCTION_PLAYER,
		ADJUST_PLAYER_POSITION, GET_MONEY,
		ADD_TO_FREE_PARKING, ADD_POTLUCK_JAILCARD,
		REMOVE_POTLUCK_JAILCARD, ADD_OPPORTUNITY_JAILCARD,
		REMOVE_OPPORTUNITY_JAILCARD } from '../../actions/game'

import { Player } from '../../../models/player'

const initialState = {
	players: [],
	numberOfPlayers: 4,
	currentPlayer: 1,
	dice: [],
	showBuyModal: false,
	showAuctionModal: false,
	rolled: false,
	playersInAuction: [],
	freeParking: 0
}

const changePlayerNumber = (players, number) => {
	if(players.length < Number(number)){
		for(let i = players.length ; i < Number(number); i ++){
			let p = new Player(i + 1, 'Player ' + (i + 1))
			players.push(p)
		}
	} else { 
		let prevLength = players.length
		players.splice(Number(number), prevLength-number)
	}	
	return players;
}

export default (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_PLAYERS_NUMBER:
			let newPlayers = changePlayerNumber(state.players, action.number)
			return {
				...state,
				players: newPlayers
			}
		case CHANGE_CURRENT_PLAYER:
			if (state.currentPlayer < state.numberOfPlayers) {
				let nextPlayer = state.currentPlayer + 1
				return {
					...state,
					currentPlayer: nextPlayer
				}
			} else {
				let firstPlayer = 1
				return {
					...state,
					currentPlayer: firstPlayer
				}
			}
		case SET_DICE:
			return {
				...state,
				dice: action.dice
			}
		case UPDATE_PLAYER_POSITION:
			let updatedPlayers = state.players.map(player => {
				if (player.id === action.playerID) {
					player.updatePosition(action.value)
				}
				return player
			})
			return {
				...state,
				players: updatedPlayers
			}
		case ADJUST_PLAYER_POSITION:
			let adjustedPlayers = state.players.map(player => {
				if (player.id === action.playerID) {
					player.adjustPosition(action.position)
				}
				return player
			})
			return {
				...state,
				players: adjustedPlayers
			}
		case SHOW_BUY_MODAL:
			return {
				...state,
				showBuyModal: true
			}
		case HIDE_BUY_MODAL:
			return {
				...state,
				showBuyModal: false
			}
		case SHOW_AUCTION_MODAL:
			return {
				...state,
				showAuctionModal: true
			}
		case HIDE_AUCTION_MODAL:
			return {
				...state,
				showAuctionModal: false
			}
		case PAY:
			let players = state.players.map(player => {
				if (player.id === action.playerID) {
					player.pay(action.value)
				}
				return player
			})
			return {
				...state,
				players: players
			}
		case GET_MONEY:
			let paidPlayers = state.players.map(player => {
				if (player.id === action.playerID) {
					player.getMoney(action.value)
				}
				return player
			})
			return {
				...state,
				players: paidPlayers
			}
		case SET_ROLLED_TRUE:
			return {
				...state,
				rolled: true
			}
		case SET_ROLLED_FALSE:
			return {
				...state,
				rolled: false
			}
		case SET_AUCTION_PLAYERS:
			let playersInAuction = state.players.filter(player => {
				return player.id !== state.currentPlayer
			})
			return {
				...state,
				playersInAuction: playersInAuction
			}
		case CLEAR_AUCTION_PLAYERS:
			return {
				...state,
				playersInAuction: []
			}
		case REMOVE_AUCTION_PLAYER:
			let updatedAuctionList = state.playersInAuction.filter(player => {
				return player.id !== action.playerID
			})
			return {
				...state,
				playersInAuction: updatedAuctionList
			}
		case ADD_TO_FREE_PARKING: 
			return {	
				...state,
				freeParking: action.value
			}
		case ADD_POTLUCK_JAILCARD:
			let potluckJailPlayers = state.players.map(player => {
				if (player.id === action.player.id) {
					player.potluckJailCard = true
				}
				return player
			})
			return {
				...state,
				players: potluckJailPlayers
			}
		case ADD_OPPORTUNITY_JAILCARD:
			let opportunityJailPlayers = state.players.map(player => {
				if (player.id === action.player.id) {
					player.opportunityJailCard = true
				}
				return player
			})
			return {
				...state,
				players: opportunityJailPlayers
			}
		default:
			return state
	}
} 