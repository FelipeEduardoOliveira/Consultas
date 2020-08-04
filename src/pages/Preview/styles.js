import Styled from 'styled-components';

export const Container = Styled.div`

display: flex;
flex-direction: column;
min-height: 100vh;
padding: 40px 60px;
background-color: #DDDD;
justify-content: center;
align-items: center;

.HeaderWithLogo{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
a{
    text-decoration: none;
    margin-bottom: 10px;
}
.MuiButton-colorInherit{
    background-color: #21af21cf;
    color: white;
    font-size: 15px;
    border-radius: 40px;
}

.MuiButton-colorInherit:hover{
    background-color: white;
    color: #21af21cf;
}


@media(max-width: 400px){
    .HeaderWithLogo{
    flex-direction: column
}
}
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
margin-top: 20px;

@media(max-width: 1000px){
    width: 100%;
}


`;

export const Title = Styled.h1`
text-transform: uppercase;
letter-spacing: 4px;
text-align: center;
font-weight: bold;
color: rgb(15,202,195);

`;

export const Overview = Styled.div`
width: 700px;
padding: 10px 10px;
display: flex;
flex-direction: column;
box-shadow: 0px 7px 21px silver;
border-radius: 20px;
margin-bottom: 40px;

.Header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
}

label{
        font-weight: bold;
        color: rgb(85,202,195);
        margin: 0px 30px;
    }
    p{
        margin-top: 0;
        font-weight: normal;
        color: silver;
    }


@media(max-width: 785px){
    width: 100%;
}

@media(max-width: 595px){
    width: 100%;

    .Header{
    flex-direction: column;
    
}
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

@media(max-width: 595px){
    justify-content: center;

}
`;
