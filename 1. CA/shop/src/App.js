import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./shoesData.js";

// import ingre1 from "./ingre1.png";

import { useState } from "react";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";

function App() {
  const thumbnail = {
    backgroundColor: "#e5e3e4",
    marginLeft: "20px",
  };

  // Export / Import를 통한 오브젝트 데이터 반입
  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar variant="dark" className="navBar">
        <Container>
          <Navbar.Brand href="#home" style={{ fontWeight: "800" }}>
            ChatPot
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>{" "}
      <div className="main-bg"></div>
      <Container style={{ marginTop: "20px" }}>
        <Row>
          {/* <Col sm>
            <img
              src={process.env.PUBLIC_URL + "/ingre3.png"}
              className="Thumb"
            />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].content}</p>
            <p>{shoes[0].price}</p>
          </Col>
          <Col sm ml3>
            <img
              src={process.env.PUBLIC_URL + "/ingre2.png"}
              className="Thumb"
            />
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].content}</p>
            <p>{shoes[1].price}</p>
          </Col>
          <img src={process.env.PUBLIC_URL + "/ingre4.png"} className="Thumb" />
          <h4>{shoes[2].title}</h4>
          <p>{shoes[2].content}</p>
          <p>{shoes[2].price}</p> */}

          {shoes.map(function (item, i) {
            return <Thumbnail shoes={shoes} idx={i}></Thumbnail>;
          })}
        </Row>
      </Container>
    </div>
  );
}

function Thumbnail(props) {
  return (
    <Col sm>
      <div className="Thumbnail">
        <img src={props.shoes[props.idx].imgPath} className="Thumb" />
        <h4>{props.shoes[props.idx].title}</h4>
        <p>{props.shoes[props.idx].content}</p>
        <p>{props.shoes[props.idx].price}</p>
      </div>
    </Col>
  );
}

export default App;
