import * as StyledHeader from '../../assets/styled-components/habitos/header-habits';
function Header(){
    const headers = JSON.parse(localStorage.getItem('headers'));
    return (
        <StyledHeader.Header>
            <StyledHeader.ContainerHeader>
                <StyledHeader.NameLogo><p>TrackIt</p></StyledHeader.NameLogo>
                <StyledHeader.ProfilePicture>
                    <img src={headers.image} alt={headers.name} />
                </StyledHeader.ProfilePicture>
            </StyledHeader.ContainerHeader>
        </StyledHeader.Header>
    );
}

export default Header;