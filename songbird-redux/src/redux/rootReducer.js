// import { combineReducers } from "redux";
// export const rootReducer = combineReducers();
import data from '../Data';
import {
    MAKE_GUESS, START_NEXT_ROUND,
    CONFIRM_CORRECT_GUESS, CONFIRM_INCORRECT_GUESS,
    SHOW_MODAL, START_NEW_GAME
} from "./types";

import { getRandomNumber, createGuessStatusObject } from '../utils'

const initialState = {
    isFinished: false,
    isGuessed: false,
    gameRound: 0,
    guessAttempts: 0,
    points: 0,
    attemptData: {}, 
    correctData: data[0][getRandomNumber(data.length)], // только id (если есть все данные)
    guessStatus: createGuessStatusObject(data, 0)
// вся дата?? questions: {category<String>, data<array of objects>}, etc.
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case MAKE_GUESS:
            return { ...state, attemptData: action.payload }
        case CONFIRM_CORRECT_GUESS:
            const newPoints = state.points + action.payloadPoints;
            return {
                ...state, isGuessed: true, points: newPoints,
                guessStatus: { ...state.guessStatus, [action.payloadName]: 'true' }
            }
        case CONFIRM_INCORRECT_GUESS:
            return {
                ...state, guessAttempts: state.guessAttempts + 1,
                guessStatus: { ...state.guessStatus, [action.payload]: 'false' }
            }
        case START_NEXT_ROUND:
            const newRound = state.gameRound + 1;
            return {
                ...state, gameRound: newRound, isGuessed: false, guessAttempts: 0,
                attemptData: {}, correctData: data[newRound][getRandomNumber(data.length)],
                guessStatus: createGuessStatusObject(data, newRound)
            }
        case START_NEW_GAME:
            return initialState;
        case SHOW_MODAL:
            return {
                ...state, isFinished: true
            }
        default: return state;
    }
}