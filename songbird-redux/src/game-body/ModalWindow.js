import React from 'react';
import '../index.scss';
import { connect } from 'react-redux';
import data from '../Data';
import { startNewGame } from '../redux/actionCreators';

const maxPoint = data[0].length - 1;
const totalPoints = data.length * maxPoint;

const ModalWindow = ({ points, startNewGame }) => {
    return (
        <div className="modal">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <h2 className="modal-title">Congrats!</h2>
                    <div className="modal-body">
                        {points === totalPoints ?
                            <p className="modal-victory">ABSOLUTE VICTORY!</p> :
                            <h4>You finished the game!</h4>
                        }
                        <h5>You got <strong>{points}</strong> out of <strong>{totalPoints}</strong> points!</h5>
                    </div>
                    <div className="modal-footer">
                        <button type="button" 
                        onClick={startNewGame}
                            className="btn btn-active">Play Again</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = {
    startNewGame
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);