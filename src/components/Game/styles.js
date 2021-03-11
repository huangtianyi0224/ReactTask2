import styled from 'styled-components';

export const NumberContainer = styled.div`
    & {
        text-align: center;
        padding: 10px;
        width: 50%;
        border: thin solid #ddd;
    }
`;

export const StarsContainer = styled.div`
    & {
        text-align: center;
        width: 50%;
        border: thin solid #ddd;
    }
`;

export const GameContainer = styled.div`
    & {
        max-width: 500px;
        margin: 0 auto;
    }
`;

export const Body = styled.div`
    & {
        display: flex;
    }
`;

export const Timer = styled.div`
    & {
        color: #666;
        margin-top: 3px;
        margin-left: 3px; 
    }
`;

export const Help = styled.div`
    & {
        color: #666;
        margin: 10px;
        text-align: center; 
    }
`;