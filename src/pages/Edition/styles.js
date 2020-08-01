import Styled from 'styled-components';

export const Container = Styled.div`
display:flex;
justify-content: center;
height: 100vh;
padding: 60px;
background-color: #DDDD;
justify-content: center;
`;

export const ContainerRegister = Styled.div`
display: flex;
flex-direction: column;
width: 950px;
border-radius: 15px;
padding: 40px;
background-color: #FFF;
.WidthFieldTime{
    width: 100px;
    margin: 10px 0px;
    box-shadow: 0px 5px 10px  silver;
}
.AllField{
    margin: 15px 0px;
}

`;

export const Title = Styled.h1`
text-transform: uppercase;
letter-spacing: 4px;
text-align: center;
font-weight: bold;
color: rgb(15,202,195);

`;

export const ButtonBox = Styled.div`
    display: flex;
    justify-content: space-between;
    .btn{
        border-radius: 20px;
        width: 200px;
    }
`;