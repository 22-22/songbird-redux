import React from 'react';
import { GameHeader } from './game-header/GameHeader';
import Card from './game-body/Card';
import Options from './game-body/Options';
import ModalWindow from './game-body/ModalWindow';
import ButtonNext from './game-body/ButtonNext';
import './index.scss';
import { useSelector } from 'react-redux';

export default function Game() {
    const isFinished = useSelector(state => state.isFinished)
    return (
        <>
            <GameHeader />
            {isFinished ||
                <main className="quiz">
                    <Card cardType="cardQuestion" />
                    <div className="quiz__answer">
                        <Options />
                        <Card cardType="cardAnswer" />
                    </div>
                    <ButtonNext />
                </main>
            }
            {isFinished &&
                <ModalWindow />
            }
        </>
    )
}
