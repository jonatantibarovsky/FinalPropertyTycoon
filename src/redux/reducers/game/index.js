import { CHANGE_CURRENT_PLAYER, SET_DICE, 
		CHANGE_PLAYERS_NUMBER, UPDATE_PLAYER_POSITION,
		SHOW_BUY_MODAL, HIDE_BUY_MODAL,
		SHOW_AUCTION_MODAL, HIDE_AUCTION_MODAL,
		PAY, SET_ROLLED_TRUE,
		SET_ROLLED_FALSE } from '../../actions/game'

import { Player } from '../../../models/player'

const initialState = {
	players: [],
	numberOfPlayers: 4,
	currentPlayer: 1,
	dice: [],
	showBuyModal: false,
	showAuctionModal: false,
	rolled: false,
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
		default:
			return state
	}
} 