import React from 'react';
import defaultImg from '../assets/defaultImg.JPG';
import Player from './Player';
import '../index.scss';
import { connect } from 'react-redux';

const Card = ({ attemptData, cardType, correctData, isGuessed }) => {
    let cardAnswer =
        Object.keys(attemptData).length === 0
            ? (
                <div className="card-body">
                    <p className="card-text">Послушайте плеер. Выберите птицу из списка</p>
                </div>
            ) : (
                <>
                    <div className="card-body card-answer__body">
                        <img className="card-image" src={attemptData.image} alt="bird"></img>
                        <div className="card-info">
                            <h4 className="card-title">{attemptData.name}</h4>
                            <p className="card-title">{attemptData.species}</p>
                            <Player audio={attemptData.audio} />
                        </div>
                    </div>
                    <p className="card-description">{attemptData.description}</p>
                </>
            )

    return (
        cardType === 'cardQuestion'
            ? (
                <div className={"card card-question"}>
                    {<div className="card-body card-question__body">
                        <img className="card-image"
                            src={isGuessed ? correctData.image : defaultImg} alt='bird' />
                        <div className="card-info">
                            <h4 className="card-title">{isGuessed ? correctData.name : '*****'}</h4>
                            <Player audio={correctData.audio} />
                        </div>
                    </div>}
                </div>
            ) : (
                <div className={"card card-answer"}>
                    {cardAnswer}
                </div>
            )
    )
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, null)(Card)
