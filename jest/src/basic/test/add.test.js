// 테스트할 파일 가져오기
const add = require('../add.js');

// 테스트 코드 작성
// test(테스트명, 테스트콜백함수)
test('', () => {
  // 테스트할 함수 (expect)
  // 정확한 예상 결과 (Assertion, toBe)
  expect(add(1, 2)).toBe(5);
});

// 테스트 원할 경우, npm run test
