import Styled from 'styled-components';

export const Container = Styled.div`
display:flex;
justify-content: center;
height: 100vh;
padding: 40px 60px;
background-color: #DDDD;

`;

export const ContainerRegister = Styled.div`
display: flex;
flex-direction: column;
text-align: center;
width: 950px;
border-radius: 15px;
padding: 40px;
background-color: #FFF;

a{
  text-decoration: none;
  color: black;
  background-color: #FDDE;
  padding: 20px;
  margin: 20px;
  font-size: 27px;
  border: 1px solid black;
  border-radius: 20px;  
  transition: all 0.30s;    
}
a:hover{
  cursor: pointer;
  font-size: 28px; 
  border-color: green;
  transition: all 0.30s;
}


`;

export const Error = Styled.header`

`;