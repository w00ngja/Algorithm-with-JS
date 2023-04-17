import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Button, Navbar, Container, Nav, Row, Col, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Detail(props) {
  let [alert, setAlert] = useState(true);
  let [count, setCount] = useState(0);

  useEffect(() => {
    // 해당 컴포넌트가 호출(Mount), 갱신(Update)될 때 실행되는 코드블럭
    // 페이지 렌더링 후 2초 후 Alert창 날리기
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      // 기존 타이머는 제거해주세요 (초기화)
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, []);

  let { productId } = useParams();
  let 찾은상품 = props.shoes.find((x) => x.id == productId);
  let [fade, setFade] = useState("");

  // Styled Componenets 선언
  let YellowBtn = styled.button`
    background-color: ${(props) => props.bg};
    color: ${(props) => (props.bg == "blue" ? "white" : "black")};
    padding: 10px;
  `;

  return (
    <Container>
      {alert === true ? (
        <Alert key={"warning"} variant={"warning"}>
          2초 이내 구매 시 99% 할인
        </Alert>
      ) : null}

      <Row className={"start " + fade}>
        <Col md>
          <img src={찾은상품.imgPath} width="60%" />
        </Col>
        <Col
          md
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h4>{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <YellowBtn bg="blue">주문하기</YellowBtn>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
