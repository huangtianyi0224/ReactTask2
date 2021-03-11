import styled from 'styled-components';

export const NumberItem = styled.button`
    & {
        background-color: #eee;
        border: thin solid #ddd;
        width: 45px;
        height: 45px;
        margin: 10px;
        font-size: 25px;
    }

    &:hover, &:focus {
        outline: none;
        border: thin solid #ddd;
    }
`;