import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
// import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
// import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
// import timepicker from "../../components/Datepicker"


class Appointment extends Component {
  state = {
    patient: {},
    day: "",
    time: "",
    phoneNumber: "",
    visitReason: ""
  };
  
  componentDidMount() {
    this.loadAppointmentInfo()
  }

  loadAppointmentInfo = () => {
    API.getPatient(this.props.match.params.id)
      .then(res =>
        this.setState({ patient: res.data, day: "", time: "", phoneNumber: "", visitReason: "" })
      )
      .catch(err => console.log(err));
  };

  deletePatient = id => {
    API.deletePatient(id)
      .then(res => this.loadAppointmentInfo())
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
    if (this.state.day && this.state.time && this.state.phoneNumber) {
      API.savePatient({
        firstName: this.state.day,
        lastName: this.state.time,
        userName: this.state.phoneNumber,
        visitReason: this.state.visitReason
      })
        .then(res => this.loadAppointmentInfo())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
    <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
            <h2><strong>Schedule an Appointment below</strong></h2> 
            </Jumbotron>
          </Col>
        </Row>
            <Col size="md-6">
           <form>
              <Input
                value={this.state.day} //date will be from a timepicker 
                onChange={this.handleInputChange}
                name="day"
                placeholder="select Date (required)"
              />
              <Input
                value={this.state.time} 
                onChange={this.handleInputChange}
                name="time"
                placeholder="select Time (required)"
              />
              <Input
                value={this.state.phonenumber}
                onChange={this.handleInputChange}
                name="phonenumber"
                placeholder="phonenumber (required)"
              />
              

             <TextArea
                value={this.state.visitReason}
                onChange={this.handleInputChange}
                name="visitReason"
                placeholder="Reason for Visit"
              />

              <FormBtn
                disabled={!(this.state.phonenumber )}
                onClick={this.handleFormSubmit}
              >
                Submit New Appointment
              </FormBtn>
            </form>
            </Col>
        <Row>
          <Col size="md-6 sm-12">
            <article>
              <h1>Previous Appointments</h1>
              <p>
                {this.state.patient.date} {this.state.patient.visitReason}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">←</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Appointment;
