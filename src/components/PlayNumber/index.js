import React from 'react';

import { NumberItem } from './styles';

const PlayNumber = props => (
        <NumberItem 
            style={{ backgroundColor: props.colors[props.status] }}
            onClick={() => props.onClick(props.number, props.status)}
        >
            {props.number}
        </NumberItem>
)

export default PlayNumber;