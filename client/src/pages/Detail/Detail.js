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
          <Col size="md-10 sm-12">
         <table>
         <tr>
          <th>Phone Number</th> 
          <br> 
                  </br> 
          <th>Email</th> 
          <br> 
                  </br> 
          <th>Social Number</th> 
          <br> 
                  </br> 
          <th>Birth Date</th> 
          <br> 
                  </br> 
                  <br> 
                  </br> 
          <th>Visit Date</th> 
          <br> 
                  </br> 
          <th>Reason for Visit</th> 
          
          </tr>
          <br> 
                  </br> 
          <tr>
          <br> 
                  </br> 
          <td>  {this.state.patient.phoneNumber}</td>
          <br> 
                  </br> 
              <td> {this.state.patient.email}</td>
              <br> 
                  </br> 
                  <br> 
                  </br> 
                  <br> 
                  </br> 
              <td>  {this.state.patient.SSN}</td>
              <br> 
                  </br> 
              <td>  {this.state.patient.birthDate}</td>
              <br> 
                  </br> 
                  <br> 
                  </br> 
              <td>  {this.state.patient.date}</td>
              <br> 
                  </br> 
              <td>  {this.state.patient.visitReason}</td>

          </tr>
         </table> 
           
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
