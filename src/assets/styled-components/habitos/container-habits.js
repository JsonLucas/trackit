import styled from 'styled-components';
export const ContainerHabits = styled.div`
    width: 100%;
`;

export const RowContainerCard = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    ${props => !props.isActive ? 'display: none;' : 'display: flex;'}
    position: relative;
`;

export const RowCard = styled.div`
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    margin-bottom: 10px;
`;

export const Message = styled.div`
    font-family: 'Open Sans', sans-serif;
`;

export const SingleCard = styled.div`
    background-color: white;
    box-sizing: border-box;
    position: relative;
    padding: 15px;
    width: 100%;
    border-radius: 5px;
`;

export const WeekDays = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const SingleDay = styled.div`
    box-sizing: border-box;
    padding: 12px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    cursor: pointer;
    ${props => props.isActive ? 'background-color: rgba(0, 0, 0, 0.2); color: white;' :
    'color: rgba(0, 0, 0, 0.2);' }
    font-size: 18px;
    margin-right: 5px;
    font-family: 'Open Sans', sans-serif;
`;

export const Buttons = styled.div`
    box-sizing: border-box;
    width: 100%;
`;

export const SingleButton = styled.button`
    width: 100px;
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
    cursor: pointer;
    ${props => props.identifier === 'save' ? 
    'background-color: rgb(18, 107, 165); color: white;' : 
    'background-color: rgba(255, 255, 255, 0); color: rgb(18, 107, 165);'}
`;

export const DeleteHabit = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    [name=trash-outline]{
        font-size: 18px;
    }
`;

export const TextHabit = styled.div`
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
    word-wrap: break-word;
    padding-right: 2px;
`;