import React from 'react';
import '../index.scss';
import { connect } from 'react-redux';
import { makeGuess, confirmCorrectGuess, confirmIncorrectGuess } from '../redux/actionCreators';
import data from '../Data';
import correctSound from '../assets/correct.mp3';
import incorrectSound from '../assets/incorrect.mp3';
import { playSound } from '../utils'
const maxPoint = data[0].length - 1;

const Options = (props) => {
    const handleClickOptions = (name) => {
        let attemptData = data[props.gameRound].find(data => data.name === name)
        props.makeGuess(attemptData);
        if (!props.isGuessed) {
            if (name === props.correctData.name) {
                const newPoints = (props.guessAttempts <= maxPoint) ? maxPoint - props.guessAttempts : 0;
                props.confirmCorrectGuess(name, newPoints);
                playSound(correctSound);

            } else {
                playSound(incorrectSound);
                if (props.guessStatus[name] !== 'false') {
                    props.confirmIncorrectGuess(name);
                }
            }
        }
    }

    return (
        <ul className="list-group options">
            {
                data[props.gameRound]
                    .map(data => data.name)
                    .map((name, idx) =>
                        <li
                            className="list-group-item d-flex align-items-center"
                            onClick={() => handleClickOptions(name)} key={idx}
                        >
                            <span
                                className={props.guessStatus[name] === 'initial'
                                    ? "options__circle"
                                    : props.guessStatus[name] === 'true'
                                        ? "options__circle options__circle-correct"
                                        : "options__circle options__circle-incorrect"}>
                            </span>
                            {name}
                        </li>
                    )}
        </ul>
    )
}

const mapDispatchToProps = {
    makeGuess,
    confirmCorrectGuess,
    confirmIncorrectGuess
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);

