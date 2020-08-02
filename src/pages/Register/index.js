import React, { Component } from 'react';

import ButtonComponent from '../../components/Button/index.js';
import InputTime from '../../components/Inputs/InputTime';
import InputText from '../../components/Inputs/InputText';
// import axios from 'axios';
import api from '../../services/api';

import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss'

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
        this.cancelButton = this.cancelButton.bind(this);
        this.saveButton = this.saveButton.bind(this);
    }
    componentDidMount(){
      this.loadApi();
    }

    async loadApi(){
      const result = await api.get('Consultas').then((response)=>{
          return response.json;
      })
      .then((response)=>{
        alert(response)
      })
      .catch((err)=>{
        alert(err)
      })
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
    
    


  // async loadApi(){
  //    const response = await api.get('/Consultas')
  //    .then(()=>{
  //      alert('sucesso')
  //    })
  //    .catch(()=>{
  //      alert('sem sucesso ')
  //    })
  // }

  
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
                        <a onClick={()=> this.cancelButton()}>
                        <ButtonComponent label='Cancelar' color='secondary' />
                        </a>

                        <a onClick={() => this.saveButton()}>
                        <ButtonComponent label='Salvar'color='primary' />
                        </a>
                    </ButtonBox>


                

                </ContainerRegister>
            </Container>
        );



    }


}

export default Register;