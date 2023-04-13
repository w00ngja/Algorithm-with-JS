import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./shoesData.js";

// 라우터 라이브러리 Import
import { Routes, Route, Link, useNavigate, Outlet, useParams } from "react-router-dom";

// State Import
import { useState } from "react";

// Bootstrap Components Import
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";

// 외부 컴포넌트 Import 시 중괄호 뗄 것
import Detail from "./routes/Detail.js";

function App() {
  // Export / Import를 통한 오브젝트 데이터 반입
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar variant="dark" className="navBar">
        <Container>
          <Navbar.Brand
            href="#home"
            style={{
              fontWeight: "800",
            }}
          >
            ChatPot
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Details
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/event");
              }}
            >
              Event
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>{" "}
      {/*  */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>

              <Container
                style={{
                  marginTop: "20px",
                }}
              >
                <Row>
                  {shoes.map(function (item, i) {
                    return <Thumbnail shoes={shoes} idx={i} navigate={navigate}></Thumbnail>;
                  })}
                </Row>
              </Container>
            </>
          }
        />
        <Route path="/detail/:productId" element={<Detail shoes={shoes} />} />
      </Routes>
    </div>
  );
}

function Thumbnail(props) {
  return (
    <Col sm>
      <div
        className="Thumbnail"
        onClick={() => {
          props.navigate("/detail/:productId");
        }}
      >
        <img src={props.shoes[props.idx].imgPath} className="Thumb" />
        <h4>{props.shoes[props.idx].title}</h4>
        <p>{props.shoes[props.idx].content}</p>
        <p>{props.shoes[props.idx].price}</p>
      </div>
    </Col>
  );
}

export default App;
