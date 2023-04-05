import { useState } from "react";
import "./App.css";

function App() {
  let [context, setContext] = useState([
    "떡볶이 맛집",
    "우리동네 우동 맛집",
    "소금빵 맛집",
  ]);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(true);

  [1, 2, 3].map(function (a) {
    return "123";
  });

  return (
    <div className="App">
      <div className="black-bg">
        <h4>wz.archive</h4>
      </div>

      <button
        // 글 제목 오름차순 정렬
        className="btnSort"
        onClick={() => {
          let copy = [...context];
          copy.sort();
          setContext(copy);
        }}
      >
        글 정렬
      </button>

      <div className="list">
        <h4>
          {context[0]}{" "}
          <span
            // 좋아요 클릭 시 +1
            onClick={() => {
              setLike(like + 1);
            }}
          >
            👍{" "}
          </span>
          {like[0]}
        </h4>
        <p>2023년 4월 5일</p>
      </div>

      <div className="list">
        <h4
          onClick={() => {
            // setContext(["떡볶이 맛집", "우리동네 규동 맛집", "소금빵 맛집"]);
            // 근데 State 값 하나만 변경하고 싶어도 어레이 전부 가져와야 될까?
            let copy = [...context];
            copy[1] = "우리동네 규동맛집";
            setContext(copy);
          }}
        >
          {context[1]}
        </h4>
        <p>2023년 4월 5일</p>
      </div>

      <div className="list">
        <h4
          // Boolean 제어를 통한 모달창 토글
          onClick={() => {
            setModal(!modal);
          }}
        >
          {context[2]}
        </h4>
        <p>2023년 4월 5일</p>
      </div>

      {/* map함수를 통한 State 바인딩 */}
      {context.map(function (item, i) {
        return (
          <div
            className="list"
            key={i}
            onClick={() => {
              let copy = [...like];
              copy[i] = copy[i] + 1;
              setLike(copy);
            }}
          > 
            <h4>
              {context[i]} <span> 👍 {like[i]}</span>
            </h4>

            <p>2023년 4월 5일</p>
          </div>
        );
      })}

      {modal === false ? <Modal></Modal> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="Modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>내용</p>
    </div>
  );
}

export default App;
