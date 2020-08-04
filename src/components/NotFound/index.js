import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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
                        <Link to={'/'}>
                            Agendar consulta
                        </Link>

                        <Link to={'/Consultas'}>
                            Vizualisar consultas
                        </Link>
                    </nav>
                </Error>
                    

                </ContainerRegister>
            </Container>
        );



    }


}

export default NotFound;