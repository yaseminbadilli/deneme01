import React from 'react';
import Header from './components/Header';
import UserList from './components/UserList';


import { Col, Container, Row } from 'reactstrap';

export default class App extends React.Component {


    render() {


        return (


            <div className="main-section">
                <Container>
                    <Row><Header /></Row>
                    <Row >

                        <Col><UserList /></Col>

                    </Row>

                </Container>

            </div>
        );

    }
}