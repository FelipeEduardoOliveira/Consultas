import React, { Component } from 'react';
import { Title, Container, ContainerPreview, Overview, BoxButton } from './styles';
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';

class Preview extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
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
                            <a onClick={() => alert('teste')}>
                                <BsFillTrashFill
                                    color={'red'}
                                    size={25} />
                            </a>

                            <a onClick={() => alert('teste')}>
                                <BsPencilSquare
                                    color={'rgb(85,202,195)'}
                                    size={25} />
                            </a>
                        </BoxButton>
                    </Overview>

                </ContainerPreview>


            </Container>
        );
    }
}

export default Preview;