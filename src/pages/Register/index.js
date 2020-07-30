import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
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

                    <TextField id="outlined-basic" label="Nome" variant="outlined" placeholder='Seu nome' className='AllField' />

                    <TextField id="outlined-basic" label="Especialidade" variant="outlined" placeholder='Sua especialidade' className='AllField' />


                    <TextField
                        className='WidthFieldTime'
                        id="date"
                        label="Inicio"
                        type="time"
                        size="normal"
                        defaultValue="12:00"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />



                    <TextField
                        className='WidthFieldTime'

                        id="date"
                        label="Fim"
                        type="time"
                        size="normal"
                        defaultValue="12:00"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <TextField type='Text' id="outlined-basic" label="Descrição" variant="outlined" placeholder='Descirção da consulta' className='AllField' />


                    <ButtonBox>
                        <Button
                            className='btn'
                            variant="contained"
                            color="secondary">
                            Cancelar
                    </Button>

                        <Button
                            className='btn'
                            variant="contained"
                            color='primary'>
                            Salvar
                        </Button>

                    </ButtonBox>
                    
                </ContainerRegister>
            </Container>
        );



    }


}

export default Register;