import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";

function App() {
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
    </div>
  );
}

export default App;
