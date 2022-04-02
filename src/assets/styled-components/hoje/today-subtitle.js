import styled from 'styled-components';
export const Container = styled.div`
    width: 100%;
`;

export const ToDaySubtitle = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    position: relative;
`;

export const MainSubtitle = styled.div`
    font-size: 22px;
    font-weight: bolder;
    padding-top: 10px;
    color: rgb(18, 107, 165);
    font-family: 'Open Sans', sans-serif;
`;

export const OtherSubtitle = styled.div`
    padding-bottom: 10px;
    font-family: 'Open Sans', sans-serif;
    display: flex;
    p{
        ${props => props.someConcluded 
            ? 'color: rgb(143, 197, 73);'
            : 'color: rgba(0, 0, 0, 0.3);'}
        font-size: 17px;
        font-weight: 500;
    }
`;