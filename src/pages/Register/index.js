import React, { Component } from 'react';
import api from '../../services/api';
import ButtonComponent from '../../components/Button/index.js';
import InputTime from '../../components/Inputs/InputTime';
import InputText from '../../components/Inputs/InputText';
// import axios from 'axios';


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


      inputName: false,
      inputSpecialty: false,
      inputStartTime: false,
      inputendTime: false,
      inputDescription: false


    }
    this.cancelButton = this.cancelButton.bind(this);
    this.saveButton = this.saveButton.bind(this);
    this.getData = this.getData.bind(this);
    this.validateField = this.validateField.bind(this);
  }


  

  cancelButton() {
    
    
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

  async saveButton() {
    const { name, specialty, startTime, endTime, description } = this.state;

    this.validateField(name, specialty, startTime, endTime, description)
    .then(()=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preecha todos os campos!'
      })
    })
    .catch((e)=>{
      return console.log(e)
    })
      await api.post('/Consultas', {
        nome: `${name}`,
          especialidade: `${specialty}`,
          inicioConsulta: `${this.getData()}T${startTime}`,
          fimConsulta: `${this.getData()}T${endTime}`,
          descricao: `${description}`
        })
        .then(()=>{
           Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          });
          // this.props.history.replace('/consultas')
        })
        .catch((err)=>{
          console.log(err)
        })
   


     
    
      
   
     

  }

  async validateField(name, specialty, startTime, endTime, description){
    // const { name, specialty, startTime, endTime, description } = this.state;
    if (name === '') {
      return this.setState({inputName: true});
    } 
    if(specialty === ''){
      return this.setState({inputSpecialty: true});
    }
    if(startTime === ''){
      return this.setState({inputStartTime: true});
    }
    if(endTime === ''){
      return this.setState({inputendTime: true})
    }
    if(description === ''){
      return this.setState({inputDescription: true})
    }
     
  }

  
 getData(data = new Date()){
  var day = data.getDate();
  var month = data.getMonth()+1;
  var year = data.getFullYear();
  
  if(day.toString().length === 1) day = '0'+day  
  if(month.toString().length == 1){
     month = '0' + month
  }

    return year+'-'+month+'-'+day;
}


  render() {

    return (

      <Container>


        <ContainerRegister>

          <Title>Cadastro</Title>

          <InputText
            error={this.state.inputName }
            label='Nome'
            placeholder='Digite Seu nome'
            value={this.state.name}
            onChange={event => {
              const { value } = event.target;
              this.setState({ name: value });
              this.setState({inputName: false})
            }}
          />


          <InputText
            error={this.state.inputSpecialty }
            label='Especialidade'
            placeholder='Digite sua Especialidade'
            value={this.state.specialty}
            onChange={event => {
              const { value } = event.target;
              this.setState({ specialty: value });
              this.setState({inputSpecialty: false})
            }}
          />



          <InputTime
            error={this.state.inputStartTime }
            label='Inicio'
            value={this.state.startTime}
            onChange={event => {
              const { value } = event.target;
              this.setState({ startTime: value });
              this.setState({inputStartTime: false})
            }}
            
          />

          <InputTime
            error={this.state.inputendTime }
            label='Fim'
            value={this.state.endTime}
            onChange={event => {
              const { value } = event.target;
              this.setState({ endTime: value });
              this.setState({inputendTime: false})
            }}
          />



          <InputText
            error={this.state.inputDescription }
            label='Descrição'
            placeholder='Digite sua descrição'
            value={this.state.description}
            onChange={event => {
              const { value } = event.target;
              this.setState({ description: value });
              this.setState({inputDescription: false})
            }}
          />



          <ButtonBox>
            <a onClick={() => this.cancelButton()}>
              <ButtonComponent label='Cancelar' color='secondary' />
            </a>

            <a onClick={() => this.saveButton()}>
              <ButtonComponent label='Salvar' color='primary' />
            </a>
          </ButtonBox>




        </ContainerRegister>
      </Container>
    );



  }


}

export default Register;