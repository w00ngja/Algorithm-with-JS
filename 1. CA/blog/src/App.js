import { useState } from "react";
import "./App.css";

function App() {
  let [context, setContext] = useState([
    "떡볶이 맛집",
    "우리동네 우동 맛집",
    "소금빵 맛집",
  ]);

  // 글마다 모달창의 제목이 바뀌게 바인딩
  let [titleIdx, setTitleIdx] = useState(0);
  let [inputText, setInputText] = useState("");

  let [like, setLike] = useState([0, 0, 0]);
  let [date, setDate] = useState(["2023/2/28", "2023/1/13", "2023/1/7"]);

  // 모달창 출력을 위한 State 생성 : Boolean 값으로 토글 제어
  let [modal, setModal] = useState(true);

  return (
    <div className="App">
      <div className="black-bg">
        <h4>wz.archive</h4>
      </div>

      {/* <button
        // 글 제목 오름차순 정렬
        className="btnSort"
        onClick={() => {
          let copy = [...context];
          copy.sort();
          setContext(copy);
        }}
      >
        글 정렬
      </button> */}

      {/* map함수를 통한 State 바인딩 */}
      {context.map(function (item, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitleIdx(i);
              }}
            >
              {context[i]}{" "}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  setLike(copy);
                }}
              >
                {" "}
                👍 {like[i]}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...context];
                  copy.splice(i, 1);
                  setContext(copy);

                  let copyLike = [...like];
                  copyLike.splice(i, 1);
                  setLike(copyLike);

                  let copyDate = [...date];
                  copyDate.splice(i, 1);
                  setDate(copyDate);
                }}
                style={{ marginLeft: "10px" }}
              >
                삭제
              </button>
            </h4>

            <p>{date[i]}</p>
          </div>
        );
      })}

      {/* 삼항연산 조건을 통한 모달창 출력 */}
      {modal === false ? (
        <Modal
          setContext={setContext}
          titleIdx={titleIdx}
          context={context}
        ></Modal>
      ) : null}

      <div style={{ marginTop: "10px" }}>
        <input
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          value={inputText}
        />
        <button
          onClick={() => {
            if (inputText !== "") {
              // 작성한 Input을 State에 따로 저장해 Context State로 복사
              let copy = [...context];
              copy.unshift(inputText);
              setContext(copy);
              setInputText("");

              // 좋아요 갯수 또한 갱신, 글과 같이 밀리면서 추가됨
              let copyLike = [...like];
              copyLike.unshift(0);
              setLike(copyLike);

              // 날짜 갱신
              let copyDate = [...date];

              let today = new Date();
              let yy = today.getFullYear();
              let mm = today.getMonth();
              let dd = today.getDate();

              copyDate.unshift(yy + "/" + mm + "/" + dd);
              setDate(copyDate);

              // 글작성 성공한 경우 Input 폼을 비우고 싶은데..?
              // input탭에서 value를 inputText State로 지정해주었고,
              // 버튼 클릭 시 InputText State를 비워줬음. 성공!
            }
          }}
          style={{ marginLeft: "10px" }}
        >
          작성
        </button>
      </div>
    </div>
  );
}

// 모달 컴포넌트 생성
function Modal(props) {
  return (
    <div className="Modal">
      <h4>{props.context[props.titleIdx]}</h4>
      <p>날짜</p>
      <p>내용</p>
      <button>글수정</button>
    </div>
  );
}

export default App;
