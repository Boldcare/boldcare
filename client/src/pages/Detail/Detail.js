import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    patient: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getPatients(this.props.match.params.id)
      .then(res => this.setState({ patient: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h2>
                {this.state.patient.firstName} , {this.state.patient.lastName}'s Details
              </h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-6 sm-12">
            <article>
              
              <ol>
              <li> Phone Number: {this.state.patient.phoneNumber}</li>
              <li> Email: {this.state.patient.email}</li>
              <li> Social: {this.state.patient.SSN}</li>
              <li> Date of Birth: {this.state.patient.birthDate}</li>
              <li> VisitDate: {this.state.patient.date}</li>
              <li> Reason for Visit: {this.state.patient.visitReason}</li>
              </ol>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/patients">← Back to Patients</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
