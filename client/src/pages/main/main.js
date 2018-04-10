import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";

const NoMatch = () =>
  <Container fluid>
    <Row>
      <Col size="lg-12">
       <Jumbotron>
            <h1><strong>Welcome to the patient Kiosk </strong></h1> 
            </Jumbotron>
            <article> 
            <p> The kiosk was created to be provided to local communities and nonprofit clinics so patients can set appoint an appoint and check into the clinic when they arrive their. 
                To get started click on your category below and proceed. 
            </p> 

            <button>
            <Link to="/appointment">Get started</Link> 
              
            </button> 

            </article> 
      </Col>
    </Row>
  </Container>;

export default NoMatch;
