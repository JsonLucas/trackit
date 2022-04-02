import styled from 'styled-components';
export const Footer = styled.footer`
    width: 100%;
    height: 70px;
    background-color: white;
    position: fixed;
    bottom 0;
`; 

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    a{
        text-decoration: none;
    }
`;

export const Btn = styled.div`
    box-sizing: border-box;
    padding-top: 20px;
    padding-bottom: 25px;
    padding-left: 25px;
    padding-right: 30px;
    color: rgb(82, 182, 255);
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
    cursor: pointer;
`;

export const BtnHabits = styled.div`
    box-sizing: border-box; 
`;

export const CircularProgress = styled.div`
    position: absolute;
    bottom: 20px;
    left: 39%;
    width: 100px;
    height: 100px;
    .CircularProgressbar-path {
        stroke: white;
    }
    .CircularProgressbar-trail {
        stroke: rgb(82, 182, 255);
    }
    .CircularProgressbar-text {
        fill: white;
        fontSize: 18px;
        font-family: 'Open Sans', sans-serif;
        font-weight: bolder;
    }
    .CircularProgressbar-background {
        fill: rgb(82, 182, 255);
    }
`;