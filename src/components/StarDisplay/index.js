import React from 'react';

import { PlayStar } from './styles';

const StarDisplay = props => (
    <>
        {props.utils(1, props.count).map(starId => 
            <PlayStar key={starId} starId={starId} />
        )}
    </>
)

export default StarDisplay;