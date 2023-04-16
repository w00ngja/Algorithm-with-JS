import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./shoesData.js";
import styled from "styled-components";
import axios from "axios";

// 라우터 라이브러리 Import
import { Routes, Route, Link, useNavigate, Outlet, useParams } from "react-router-dom";

// State Import
import { useState } from "react";

// Bootstrap Components Import
import { Button, Navbar, Container, Nav, Row, Col, Alert } from "react-bootstrap";

// 외부 컴포넌트 Import 시 중괄호 뗄 것
import Detail from "./routes/Detail.js";

function App() {
  // Export / Import를 통한 오브젝트 데이터 반입
  let [shoes, setShoes] = useState(data);
  let [clickCount, setClickCount] = useState(0);
  let [moreBtn, setMoreBtn] = useState(true);
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
              {moreBtn === true ? (
                <Button
                  key={"warning"}
                  variant={"warning"}
                  style={{ marginTop: "20px" }}
                  onClick={() => {
                    console.log(moreBtn);
                    if (clickCount === 0) {
                      axios
                        .get("https://codingapple1.github.io/shop/data2.json")
                        .then((data) => {
                          let copy = [...shoes, ...data.data];
                          setShoes(copy);
                          setClickCount(1);
                          // 더보기 버튼 클릭 시 메인 상품 리스트 페이지에 불러온 데이터를 같은 형식으로 추가
                        })
                        .catch(
                          // Ajax 요청에 실패했을 때 실행할 코드
                          console.log("로딩실패")
                        );
                    } else if (clickCount === 1) {
                      axios
                        .get("https://codingapple1.github.io/shop/data3.json")
                        .then((data) => {
                          let copy = [...shoes, ...data.data];
                          setShoes(copy);
                          setClickCount(2);
                          setMoreBtn(false);

                          // 더보기 버튼 클릭 시 메인 상품 리스트 페이지에 불러온 데이터를 같은 형식으로 추가
                        })
                        .catch(
                          // Ajax 요청에 실패했을 때 실행할 코드
                          console.log("로딩실패")
                        );
                    }
                  }}
                >
                  더보기
                </Button>
              ) : null}
            </>
          }
        />
        <Route path="/detail/" />
        <Route path="/detail/:productId" element={<Detail shoes={shoes} />} />
      </Routes>
    </div>
  );
}

function Thumbnail(props) {
  let productId = props.idx;
  let pageAdress = "/detail/" + productId;

  return (
    <Col sm>
      <div
        className="Thumbnail"
        onClick={() => {
          props.navigate(pageAdress);
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
