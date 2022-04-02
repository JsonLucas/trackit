import styled from 'styled-components';
export const Header = styled.header`
    position: sticky;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 70px;
    background-color: rgb(18, 107, 165);
    box-sizing: border-box;
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.3);
`;

export const ContainerHeader = styled.div`
    display: flex;
    height: 100%;
    position: relative;
`;

export const ProfilePicture = styled.div`
    height: 60px;
    width: 60px;
    position: absolute;
    right: 20px;
    top: 5px;
    img{
        border-radius: 50%;
        height: 100%;
        width: 100%;
        cursor: pointer;
    }
`;

export const Logout = styled.div`
    background-color: white;
    box-sizing: border-box;
    border-radius: 2px;
    width: 100%;
    padding: 5px;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    text-align: center;
    color: rgb(18, 107, 165);
    cursor: pointer;
    ${props => props.toggle ? '' : 'display: none;'}
`;

export const NameLogo = styled.div`
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 40px;
    color: white;
    font-family: 'Playball', cursive;
`;