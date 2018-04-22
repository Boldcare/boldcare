// import React from "react";
 import { Col, Row, Container } from "../../components/Grid";
 import { Link } from "react-router-dom";
 import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
// import Jumbotron from "../../components/Jumbotron";

// const Main= () =>
  // <Container fluid>
  //   <Row>
  //     <Col size="lg-12">
  //      <Jumbotron>
  //           <h1><strong>Welcome to the patient Kiosk </strong></h1> 

  //           </Jumbotron>
            // <article> 
            // <p> The kiosk was created to be provided to local communities and nonprofit clinics so patients can set appoint an appoint and check into the clinic when they arrive their. 
            //     To get started, select your category below and proceed. 
            // </p> 

            // <button>
            // <Link to="/appointment">Patient</Link> 
              
            // </button> 
            // <button>
            // <Link to="/patients">Hospital staff</Link> 
              
            // </button> 

            // </article> 
  //     </Col>
  //   </Row>
  // </Container>;





import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
 
class Main extends Component {

    render() {
        return (


          <Container fluid>
                     <article> 

            
                  <br> 
                  </br> 
            <h3> The kiosk was created specifically for to local communities and nonprofit clinics so patients can set an appointment and check into the clinic when they arrive there. 
                To get started, select your category below and proceed. 
            </h3> 

              <br> 
                  </br> 
            <button>
            <Link to="/login"><h4>Patient</h4></Link> 
              
            </button> 
            <button>
            <Link to="/patients"><h4>Hospital staff</h4></Link> 
              
            </button> 

            </article> 

            <br> 
                  </br> 
            <Row>
                  <Col size="sm-10">
                    <Carousel>
                        <div>
                            <img src="https://todaymiddleware.mims.com/resource/image/5651CBD1-5C07-402C-A40C-A62000F9EDD1/OriginalThumbnail/THUMBNAIL_Fotolia_69822599_Subscription_Monthly_M.jpg" />
                            <p className="legend"></p>
                        </div>
                        <div>
                            <img src="https://www.medicalwebexperts.com/blog/content/uploads/2015/04/Bridge-Patient-Portal.jpg" />
                            <p className="legend"></p>
                        </div>
                        <div>
                            
                            <img src="http://www.lebonheur.org/images/photos/experience-le-bonheur/hospital-ground/Ground1.jpg"  />
                            <p className="legend"></p>
                        </div>
                    </Carousel>
                      </Col>
                    </Row>

            </Container>
        );
    }
};

export default Main;

