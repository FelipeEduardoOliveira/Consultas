import React, { Component } from 'react';


import { ContainerRegister, Container,Error } from './styles';

class NotFound extends Component {
    constructor(porps) {
        super(porps);
        this.state = {

        }
    }

    render() {
        return (

            <Container>


                <ContainerRegister>

                <Error>
                    <nav>
                        <a>
                            Agendar consulta
                        </a>

                        <a>
                            Vizualisar consultas
                        </a>
                    </nav>
                </Error>
                    

                </ContainerRegister>
            </Container>
        );



    }


}

export default NotFound;