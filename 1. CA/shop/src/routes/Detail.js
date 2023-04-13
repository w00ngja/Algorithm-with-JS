import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
function Detail(props) {
  let { productId } = useParams();
  let 찾은상품 = props.shoes.find((x) => x.productId == productId);

  return (
    <Container>
      <Row>
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
          <button>주문하기</button>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
