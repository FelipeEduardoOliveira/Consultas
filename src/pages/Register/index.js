import React, { Component } from 'react';

import ButtonComponent from '../../components/Button/index.js';
import InputTime from '../../components/Inputs/InputTime';
import InputText from '../../components/Inputs/InputText';

import { ContainerRegister, Container, Title, ButtonBox } from './styles';

class Register extends Component {
    constructor(porps) {
        super(porps);
        this.state = {
            name: '',
            specialty: '',
            startTime: '',
            endTime: '',
            description: '',

        }
    }

    render() {
        
        return (

            <Container>


                <ContainerRegister>

                    <Title>Cadastro</Title>

                    <InputText 
                    label='Nome' 
                    placeholder='Digite Seu nome'
                    value={this.state.name}
                    onChange={event => {
                        const { value } = event.target;
                        this.setState({ name: value });
                      }}
                    />


                    <InputText 
                    label='Especialidade' 
                    placeholder='Digite sua Especialidade'
                    value={this.state.specialty}
                    onChange={event => {
                        const { value } = event.target;
                        this.setState({ specialty: value });
                      }}
                      />



                    <InputTime 
                    label='Inicio' 
                    value={this.state.startTime}
                    onChange={event => {
                        const { value } = event.target;
                        this.setState({ startTime: value });
                      }}
                    />

                    <InputTime 
                    label='Fim' 
                    value={this.state.endTime}
                    onChange={event => {
                        const { value } = event.target;
                        this.setState({ endTime: value });
                      }}
                    />

                    

                    <InputText 
                    label='Descrição' 
                    placeholder='Digite sua descrição'
                    value={this.state.description}
                    onChange={event => {
                        const { value } = event.target;
                        this.setState({ description: value });
                      }}
                    />

                    
                   
                    <ButtonBox>

                        <ButtonComponent label='Cancelar' color='secondary'/>

                        <ButtonComponent label='Salvar'color='primary'/>
                        

                    </ButtonBox>


                <div>
                    <p>Visualizar states</p>
                    <p>Nome: {this.state.name}</p>
                    <p>Especialidade: {this.state.specialty}</p>
                    <p>Inicio: {this.state.startTime}</p>
                    <p>Fim: {this.state.endTime}</p>
                    <p>Descrição: {this.state.description}</p>
                </div>

                </ContainerRegister>
            </Container>
        );



    }


}

export default Register;