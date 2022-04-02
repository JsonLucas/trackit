import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import * as StyledHeader from '../../assets/styled-components/habitos/header-habits';
import UserContext from '../../utils/use-contexts/UserContext';
function Header(){
    const headers = JSON.parse(localStorage.getItem('headers'));
    const [cont, setCont] = useState(0);
    const [toggle, setToggle] = useState(false);
    const {setToken} = useContext(UserContext);
    const navigate = useNavigate();
    function toggleLogout(e){
        if(cont%2 === 0){
            setCont(cont+1);
            setToggle(true);
        }else{
            setCont(cont+1);
            setToggle(false);
        }
    }
    function logout(){
        localStorage.removeItem('headers');
        setToken('');
        navigate('/');
    }
    return (
        <StyledHeader.Header>
            <StyledHeader.ContainerHeader>
                <StyledHeader.NameLogo><p>TrackIt</p></StyledHeader.NameLogo>
                <StyledHeader.ProfilePicture>
                    <img src={headers.image} alt={headers.name} onClick={toggleLogout} />
                    <StyledHeader.Logout onClick={logout} toggle={toggle}>Sair</StyledHeader.Logout>
                </StyledHeader.ProfilePicture>
            </StyledHeader.ContainerHeader>
        </StyledHeader.Header>
    );
}

export default Header;