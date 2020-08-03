import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { Title, Container, ContainerPreview, Overview, BoxButton } from './styles';
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';

import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss'

class Preview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            consultations: []
        }
        this.excludeButton = this.excludeButton.bind(this);
    }

    excludeButton(id){
        Swal.fire({
            title: 'Cuidado',
            text: `Você quer mesmo excluir o cadastro? ${id}`,
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Não',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim'
          }).then((result) => {
            if (result.value) {
               
              Swal.fire(
                'Excluido!',
                'O cadastro foi excluido.',
                'success'
              )
            }
          })
    }
    componentDidMount(){
        this.loadApi();
      }
  
      async loadApi(){
        const result = await api.get('/consultas')
        .then((response)=>{
            return response.data
        })
        this.setState({consultations: result})
        console.log(result[0]);

  
      }

    render() {
        return (
            <Container>
                <ContainerPreview>
                    <Title> Consultas agendadas </Title>

                {this.state.consultations.map((item)=>{
                        return(
                            <Overview key={item.id}>
                        <div className='Header'>
                            <label>
                                Nome
                        <p>{item.nome}</p>
                            </label>
                            <label>
                                Especialidade
                        <p>{item.especialidade}</p>
                            </label>
                            <label>
                                Inicio
                        <p>{item.inicioConsulta.split("T")[1]}</p>
                            </label>
                            <label>
                                Fim
                        <p>{item.fimConsulta.split("T")[1]}</p>
                            </label>
                        </div>

                        <label className='Descricao'>
                            Descrição
                        <p>{item.descricao}</p>
                        </label>

                        <BoxButton>
                            <a onClick={() => this.excludeButton(item.id)}>
                                <BsFillTrashFill
                                    color={'red'}
                                    size={25} />
                            </a>

                            <Link to ='/edicao'>
                                <BsPencilSquare
                                    color={'rgb(85,202,195)'}
                                    size={25} />
                            </Link>
                        </BoxButton>
                    </Overview> 
                        );
                })}

                    {/* <Overview>
                        <div className='Header'>
                            <label>
                                Nome
                        <p>Dr. Felipe Oliveira</p>
                            </label>
                            <label>
                                Especialidade
                        <p>Cardiologista</p>
                            </label>
                            <label>
                                Inicio
                        <p>12:00</p>
                            </label>
                            <label>
                                Fim
                        <p>12:30</p>
                            </label>
                        </div>

                        <label className='Descricao'>
                            Descrição
                        <p>Aqui seria a descrição do atendimento, por exemplo, o paciente quer passar com o cardiologista, os sintomas que veem sentindo, por quanto tempo e etc...</p>
                        </label>

                        <BoxButton>
                            <a onClick={() => this.excludeButton()}>
                                <BsFillTrashFill
                                    color={'red'}
                                    size={25} />
                            </a>

                            <Link to ='/edicao'>
                                <BsPencilSquare
                                    color={'rgb(85,202,195)'}
                                    size={25} />
                            </Link>
                        </BoxButton>
                    </Overview> */}

                </ContainerPreview>


            </Container>
        );
    }
}

export default Preview;