import React from 'react';

import { GameDone, Message } from './style';

const PlayAgain = props => {
    return(
        <GameDone>
            <Message style={{ color: props.gameStatus === 'lost' ? 'red' : 'green' }} >
                {props.gameStatus === 'lost' ? 'Game Over' : 'Nice' }
            </Message>
            <button onClick={props.onClick}>{props.content}</button>
        </GameDone>
    );
}

export default PlayAgain;