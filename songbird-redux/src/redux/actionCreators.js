import {
    MAKE_GUESS, START_NEXT_ROUND,
    CONFIRM_CORRECT_GUESS, CONFIRM_INCORRECT_GUESS,
    SHOW_MODAL, START_NEW_GAME
} from "./types"

export function makeGuess(attemptData) {
    return {
        type: MAKE_GUESS,
        payload: attemptData
    }
}

export function confirmCorrectGuess(attemptName, newPoints) {
    return {
        type: CONFIRM_CORRECT_GUESS,
        payloadName: attemptName,
        payloadPoints: newPoints,
    }
}

export function confirmIncorrectGuess(attemptName) {
    return {
        type: CONFIRM_INCORRECT_GUESS,
        payload: attemptName
    }
}

export function startNextRound() {
    return {
        type: START_NEXT_ROUND
    }
}

export function showModal() {
    return {
        type: SHOW_MODAL
    }
}

export function startNewGame() {
    return {
        type: START_NEW_GAME
    }
}