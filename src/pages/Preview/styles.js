import Styled from 'styled-components';

export const Container = Styled.div`
display: flex;
justify-content: center;
height: 100vh;
padding: 40px 60px;
background-color: #DDDD;
justify-content: center;
`;

export const ContainerPreview = Styled.div`
display: flex;
align-items: center;
flex-direction: column;
border-radius: 15px;
padding: 40px;
width: 950px;
min-height: 600px;
background-color: #FFF;


`;

export const Title = Styled.h1`
text-transform: uppercase;
letter-spacing: 4px;
text-align: center;
font-weight: bold;
color: rgb(15,202,195);

`;

export const Overview = Styled.div`
max-width: 700px;
padding: 10px 30px;
display: flex;
flex-direction: column;
box-shadow: 1px 7px 21px silver;
border-radius: 20px;
margin-bottom: 10px;

label{
        font-weight: bold;
        color: rgb(85,202,195);
    }
    p{
        margin-top: 0;
        font-weight: normal;
        color: silver;
    }
.Header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
}
`;

export const BoxButton = Styled.div`
display: flex;
justify-content: flex-end;
a{
    padding: 0 5px;
}
a:hover{
cursor: pointer;
transform: scale(1.2);
}
`;
