import React, { Component } from 'react';
import { Title, Container, ContainerPreview, Overview } from './styles';

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

                    </Overview>
                </ContainerPreview>


            </Container>
        );
    }
}

export default Preview;