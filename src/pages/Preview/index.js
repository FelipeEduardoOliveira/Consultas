import React, { Component } from 'react';
import axios from 'axios';
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

    excludeButton(){
        Swal.fire({
            title: 'Cuidado',
            text: "Você quer mesmo excluir o cadastro?",
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




    render() {
        return (
            <Container>
                <ContainerPreview>

                    <Title> Consultas agendadas </Title>


                    <Overview>
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
                    </Overview>

                </ContainerPreview>


            </Container>
        );
    }
}

export default Preview;