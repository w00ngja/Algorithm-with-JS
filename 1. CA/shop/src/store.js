import { configureStore, createSlice } from "@reduxjs/toolkit";

// App.js를 포함한 모든 하위 컴포넌트에서 사용할 수 있는 State를 저장
let user = createSlice({
  name: "user",
  initialState: "Kim",
  reducers: {
    // Set 함수 선언
    changeName(state) {
      return "john " + state;
    },
  },
});

export let { changeName } = user.actions;

let stock = createSlice({
  name: "stock",
  initialState: [],
  reducers: {
    addStock(state, id) {
      // 입력받은 ID 파라미터를 가진 장바구니 리스트 아이템 Count ++;
      let 선택상품 = state.find((x) => x.id === id.payload);
      선택상품.count += 1;
    },
    subStock(state, id) {
      // 입력받은 ID 파라미터를 가진 장바구니 리스트 아이템 Count --;
      let 선택상품 = state.find((x) => x.id === id.payload);
      선택상품.count -= 1;
    },
    pushStock(state, obj) {
      // 장바구니 담기 버튼을 눌렀을 때,
      // 장바구니 리스트에 이미 해당 상품이 있으면 -> count ++
      // 장바구니 리스트에 해당 삼품이 없으면 State 배열에 해당 상품 정보 추가하고 count = 1
      // let obj = { id: id.payload, name: name.payload, count: count.payload };
      state.push(obj.payload);
    },
  },
});

export let { addStock, subStock, pushStock } = stock.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
  },
});
