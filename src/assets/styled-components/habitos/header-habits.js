import styled from 'styled-components';
export const Header = styled.header`
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
    }
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