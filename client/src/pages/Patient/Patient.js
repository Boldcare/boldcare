import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Patients extends Component {
  state = {
    patients: [], 
    firstName: "",
    lastName: "",
    birthDate: "",
    SSN: "",
    phoneNumber: "", 
    username: "", 
    email: "", 
    password: "",
    visitReason: "", 

  };

  componentDidMount() {
    this.loadPatients();
  }

  loadPatients = () => {
    API.getPatient()
      .then(res =>
        this.setState({ patients: res.data, firstName: "", lastName: "", birthDate: "", SSN: "", phoneNumber: "",  username: "", email: "",  password: "" })
      )
      .catch(err => console.log(err));
  };

  deletePatients= id => {
    API.deletePatient(id)
      .then(res => this.loadPatients())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      API.savePatients({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        birthDate: this.state.birthDate,
        SSN: this.state.SSN,
        phoneNumber: this.state.phoneNumber,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        visitReason: this.state.visitReason
      })
        .then(res => this.loadPatients())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h2>Add a patient Below</h2>
            </Jumbotron>
            <form>
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="First Name (required)"
              />
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="lastName"
                placeholder="Last Name (required)"
              />
              <Input
                value={this.state.birthDate}
                onChange={this.handleInputChange}
                name="birthDate"
                placeholder="Date of Birth (required)"
              />
              <Input
                value={this.state.SSN}
                onChange={this.handleInputChange}
                name="SSN"
                placeholder="Social Security Number (required)"
              />
              <Input
                value={this.state.phoneNumber}
                onChange={this.handleInputChange}
                name="phoneNumber"
                placeholder="Phone Number(required)"
              />
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="username (required)"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="email(required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password(required)"
              />
              <TextArea
                value={this.state.visitReason}
                onChange={this.handleInputChange}
                name="visitReason"
                placeholder="Reason for Visit"
              />
              <FormBtn
                disabled={!(this.state.username && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Submit Patient
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h2>Added Patients</h2>
            </Jumbotron>
            {this.state.patients.length ? (
              <List>
                {this.state.patients.map(patients => (
                  <ListItem key={patients._id}>
                    <Link to={"/patients/" + patients._id}>
                      <strong>
                        {patients.firstName}, {patients.lastName}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deletePatients(patients._id)} />
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

export default Patients;
