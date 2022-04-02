import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    margin: auto;
    font-family: 'Open Sans', sans-serif;
`;

export const AreaForm = styled.div`
    width: 100%;
    margin-top: 70px; 
    .logo-initial {
        min-width: 50%;
        max-width: 60%;
        margin: auto;
    }
    .logo-initial > img{
        width: 100%;
        height: 100%;
    }
`;

export const Inputs = styled.div`
    box-sizing: border-box;
    width: 100%;
    margin-top: 30px;
    div > .input::-webkit-input-placeholder{
        color: rgba(0, 0, 0, 0.3);
    }
`;

export const SingleInput = styled.input`
  box-sizing: border-box;
  padding: 10px;
  margin-top: 5px;
  width: 100%;
  border: 1px rgba(0, 0, 0, 0.1);
  border-style: groove;
  border-radius: 5px;
  font-size: 16px;
`;

export const ButtonForm = styled.button`
    margin-top: 5px;
    width: 100%;
    border: none;
    background-color: rgb(82, 182, 255);
    padding: 10px;
    color: white;
    border-radius: 5px;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
    div{
        margin: auto;
        width: 70px;
    }
`;

export const SignLogin = styled.div`
    width: 100%;
    text-align: center;
    color:rgb(82, 182, 255);
    margin-top: 20px;
`;