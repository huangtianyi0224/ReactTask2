import styled from 'styled-components';

export const PlayStar = styled.div`
    & {
        display: inline-block;
        margin: 0 15px;
    }

    &::after {
        content: "★";
        font-size: 45px;
    }
`;