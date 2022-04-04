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
    left: 37.5%;
    width: 85px;
    height: 85px;
    
    .CircularProgressbar {
        width: 100%;
        vertical-align: middle;
        background-color: rgb(82, 182, 255);
        border-radius: 50%;
        padding: 5px;
    }

    .CircularProgressbar .CircularProgressbar-path {
        stroke: white;
        stroke-linecap: round;
        -webkit-transition: stroke-dashoffset 0.5s ease 0s;
        transition: stroke-dashoffset 0.5s ease 0s;
    }

    .CircularProgressbar .CircularProgressbar-trail {
        stroke: rgb(82, 182, 255);
        stroke-linecap: round;
        padding: 5px;
    }

    .CircularProgressbar .CircularProgressbar-text {
        fill: white;
        font-size: 20px;
        dominant-baseline: middle;
        font-family: 'Open Sans', sans-serif;
        text-anchor: middle;
    }

    .CircularProgressbar .CircularProgressbar-background {
        fill: rgb(82, 182, 255);
    }

    .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-background {
        fill: #3e98c7;
    }

    .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-text {
        fill: #fff;
    }

    .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-path {
        stroke: #fff;
    }

    .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-trail {
        stroke: transparent;
    }
`;