import React from 'react';
import '../index.scss';
import { connect } from 'react-redux';
import { startNextRound, showModal } from '../redux/actionCreators'
import data from '../Data';

const ButtonNext = (props) => {
    const goFurther = () => {
        if (props.isGuessed) {
            if (props.gameRound + 1 >= data.length) {
                props.showModal();
            } else {
                props.startNextRound();
            }
        }
    }

    return (
        <button type="button"
            onClick={goFurther}
            className={props.isGuessed ? "btn btn-lg btn-block btn-active"
                : "btn btn-primary btn-lg btn-block"}
        >
            Next level
        </button>
    )
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = {
    startNextRound,
    showModal
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonNext)

