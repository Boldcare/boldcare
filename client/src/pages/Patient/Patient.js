import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Patient extends Component {
  state = {
    patientInfo: [],
    firstName: "", 
    lastName: "", 
    userName: "", 
    password: "", 
    email: "", 
    visitReason: ""
    
  };

  componentDidMount() {
    this.loadPatientInfo();
    console.log('reloading')
  }

  loadPatientInfo = () => {
    API.getPatients()
      .then(res =>
        this.setState({ patientInfo: res.data, firstName: "", lastName: "", userName: "", password: "", email: "", visitReason: "" })
      )
      .catch(err => console.log(err));
  };

  deletePatient = id => {
    API.deletePatient(id)
      .then(res => this.loadPatientInfo())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
   //nsole.log("API", API);
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName && this.state.userName && this.state.password && this.state.email) {
      console.log("form Submit begin")
      API.savePatient({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        userName: this.state.userName,
        password: this.state.password,
        email: this.state.email, 
        visitReason: this.state.visitReason
      })
        .then(res => this.loadPatientInfo())
        .catch(err => console.log("this is where the error is",err));
    }
    console.log('form submit complete')
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1><strong>Add a Patient Below</strong></h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="firstName (required)"
              />
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="lastName"
                placeholder="lastName (required)"
              />
              <Input
                value={this.state.userName}
                onChange={this.handleInputChange}
                name="userName"
                placeholder="userName (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="password (required)"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="email (required)"
              />

              <TextArea
              value = {this.state.visitReason}
              onChange = {this.handleInputChange}
              name="VisitReason"
              placeholder = "visit Reason (optional)"
              />

              <FormBtn
                disabled={!(this.state.firstName && this.state.lastName && this.state.userName && this.state.password && this.state.email )}
                onClick={this.handleFormSubmit}
              >
                Submit New Patient
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Previous Patients</h1>
            </Jumbotron>
            {!this.state.patientInfo.length ? (
              <List>
                {this.state.patientInfo.map(patientInfo => (
                  <ListItem key={patientInfo._id}>
                    <Link to={"/patients/" + patientInfo._id}>
                      <strong>
                        {patientInfo.firstName} {patientInfo.lastName}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deletePatient(patientInfo._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Patient;
