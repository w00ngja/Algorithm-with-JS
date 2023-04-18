import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Button, Navbar, Container, Nav, Row, Col, Alert } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { changeName, addStock, subStock, pushStock } from "../store";

function Cart(props) {
  // Redux Store에 있던 모든 State 호출하여 선언, 사용 가능
  let State = useSelector((state) => {
    return state;
  });

  let dispatch = useDispatch();

  let StockBtn = styled.button`
    background-color: yellowgreen;
    color: white;
    padding: 0px 10px;
    margin: 0px 10px;
    border-radius: 10px;
    border: none;
  `;

  return (
    <Container>
      <h2 style={{ marginTop: "20px", marginBottom: "20px", fontWeight: "700" }}>{State.user}'s Cart</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>제품코드</th>
            <th>품명</th>
            <th>수량</th>
          </tr>
        </thead>
        <tbody>
          {State.stock.map(function (item, i) {
            return (
              <tr>
                <td>{i}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td style={{ minWidth: "200px" }}>
                  <StockBtn
                    onClick={() => {
                      dispatch(subStock(item.id));
                    }}
                  >
                    -
                  </StockBtn>
                  {item.count}
                  <StockBtn
                    onClick={() => {
                      dispatch(addStock(item.id));
                    }}
                  >
                    +
                  </StockBtn>
                </td>
              </tr>
            );
          })}
          <tr>
            <td>-</td>
            <td colSpan={2}>셀 합치기</td>
            {/* <td>Jackson</td> */}
            {/* <td>ttotto</td> */}
            <td>오옷</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Cart;
