import React from 'react';
import '../index.scss';
import { connect } from 'react-redux';

const Score = (props) => (
    <div className="header__top-score">
        Score: <span>{props.points}</span>
    </div>
)

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, null)(Score);