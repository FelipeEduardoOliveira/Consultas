import React, { Component } from 'react';
import ButtonComponent from '../../components/Button/index.js';

import InputTime from '../../components/Inputs/InputTime';
import InputText from '../../components/Inputs/InputText';
import { ContainerRegister, Container, Title, ButtonBox } from './styles';

class Register extends Component {
    constructor(porps) {
        super(porps);
        this.state = {

        }
    }

    render() {
        return (

            <Container>


                <ContainerRegister>

                    <Title>Cadastro</Title>

                    <InputText label='Nome' placeholder='Digite Seu nome'/>
                    <InputText label='Especialidade' placeholder='Digite sua Especialidade'/>



                    <InputTime label='Inicio' timer='12:00'/>
                    <InputTime label='Fim' timer='13:00'/>

                    <InputText label='Descrição' placeholder='Digite sua descrição'/>

                    
                   
                    <ButtonBox>

                        <ButtonComponent label='Cancelar' color='secondary'/>

                        <ButtonComponent label='Salvar'color='primary'/>
                        

                    </ButtonBox>

                </ContainerRegister>
            </Container>
        );



    }


}

export default Register;