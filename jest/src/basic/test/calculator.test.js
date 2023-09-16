// 1. 테스트할 원본 코드를 Import해온다.
const Calculator = require('../calculator');

// 2. 관련 있는 테스트들을 하나의 그룹으로 묶어준다. -> describe를 사용, 계층적으로 nest하게 사용할 수도 있음
describe('Calculator', () => {
  // 3. 반복되는 초기값 설정 로직을 묶어 관리해준다.
  // 각각의 테스트는 독립적으로 이루어져야 한다!
  beforeEach(() => {
    cal = new Calculator();
  });

  // 2-1. 초기화테스트
  it('inits with 0', () => {
    // const cal = new Calculator();
    expect(cal.value).toBe(0);
  });

  // 2-2. 값 설정 테스트
  it('sets', () => {
    // const cal = new Calculator();
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it('clear', () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it('adds', () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });

  // 5. 예외처리 구현
  it('add should throw an error if value is greater than 100', () => {
    expect(() => {
      cal.add(101);
    }).toThrow('Value can not be greater than 100');
  });

  it('subtracts', () => {
    cal.subtract(1);
    // expect(cal.value).toBe(-1);
  });

  it('multiplies', () => {
    cal.set(5);
    cal.multiply(4);
    expect(cal.value).toBe(20);
  });

  // 4. 나눗셈 테스트는 추가적인 예외처리들이 필요하기 때문에
  // nested describe를 사용하여 그룹화해주었음
  describe('divides', () => {
    it('0/0 === NaN', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
    it('n/0 === Inf', () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
  });
});
