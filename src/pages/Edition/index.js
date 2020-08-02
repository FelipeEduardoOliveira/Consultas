import React, { Component } from 'react';

import ButtonComponent from '../../components/Button/index.js';
import InputTime from '../../components/Inputs/InputTime';
import InputText from '../../components/Inputs/InputText';

import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

import { ContainerRegister, Container, Title, ButtonBox } from './styles';

class Register extends Component {
    constructor(porps) {
        super(porps);
        this.state = {

        }
    }

    cancelButton(){
        Swal.fire({
            title: 'Cuidado',
            text: "Você quer mesmo cancelar o cadastro?",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Não',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim'
          }).then((result) => {
            if (result.value) {
                const state = this.setState;
                state.nome = '';
                state.specialty = '';
                state.startTime = '';
                state.endTime = '';
                state.description = '';
                
                this.setState({
                    name: '',
                    specialty: '',
                    startTime: '',
                    endTime: '',
                    description: ''
                });
              Swal.fire(
                'Cancelado!',
                'O cadastro foi cancelado.',
                'success'
              )
            }
          })
    }

    async saveButton(){
        await Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          });
          this.props.history.replace('/consultas')
    }

    render() {
        return (

            <Container>


                <ContainerRegister>

                    <Title>Edição</Title>

                    <InputText label='Nome' placeholder='Digite Seu nome'/>
                    <InputText label='Especialidade' placeholder='Digite sua Especialidade'/>



                    <InputTime label='Inicio' timer='12:00'/>
                    <InputTime label='Fim' timer='13:00'/>

                    <InputText label='Descrição' placeholder='Digite sua descrição'/>

                    
                   
                    <ButtonBox>
                        <a onClick={()=> this.cancelButton()}>
                        <ButtonComponent label='Cancelar' color='secondary'/>
                        </a>
                        
                        <a onClick={()=> this.saveButton()}>
                        <ButtonComponent label='Salvar'color='primary'/>
                        </a>

                    </ButtonBox>

                </ContainerRegister>
            </Container>
        );



    }


}

export default Register;