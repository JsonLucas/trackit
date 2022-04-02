import styled from 'styled-components';
export const Container = styled.div`
    width: 100%;
`;

export const Row = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    position: relative;
`;

export const RowSubtitle = styled.div`
    font-size: 22px;
    font-weight: bolder;
    padding-top: 10px;
    padding-bottom: 10px;
    color: rgb(18, 107, 165);
    font-family: 'Open Sans', sans-serif;
`;

export const AddButton = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    box-sizing: border-box;
    background-color: rgb(82, 182, 255);
    border-radius: 5px;
    cursor: pointer;
    [name=add-outline]{
        color: white;
        font-weight: 900;
        padding: 10px;
    }
`;