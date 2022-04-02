import styled from 'styled-components';
export const Container = styled.div`
    width: 100%;
    padding-bottom: 115px;
`;

export const Wrapper = styled.div`
    box-sizing: border-box;
`;

export const CardToDo = styled.div`
    box-sizing: border-box;
    position: relative;
    padding: 15px;
    width: 100%;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    background-color: white;
    font-family: 'Open Sans', sans-serif;
`;

export const TitleToDo = styled.div`
    font-size: 22px;
`;

export const InfoSequence = styled.div`
    padding-top: 15px;
`; 

export const TextInfo = styled.div`
    font-size: 14px;
    display: flex;
    p{
        ${props => props.isDone ? 'color: rgb(143, 197, 73);' 
        : 'color: rgb(0, 0, 0)'}    
    }
`;

export const Checked = styled.div`
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
    ${props => props.isDone ? 'background-color: rgb(143, 197, 73);' 
    : 'background-color: rgba(0, 0, 0, 0.3);'}
    [name="checkmark-outline"]{
        color: white;
        font-weight: bolder;
        font-size: 40px;
    }
`;