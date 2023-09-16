const check = require('../check');

// 첫 번째 인자 함수 predicate의 결과값에 따라서 onSuccess 혹은 onFail이 잘 불러와지는지 유닛테스트

describe('check', () => {
  let onFail;
  let onSuccess;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it('should call on Success when predicate is true', () => {
    // true를 반환하는 predicate 임의로 선언
    check(() => true, onSuccess, onFail);

    // onSuccess가 1번 호출되어야 한다는 것을 전달
    // 너무 직관적이지 않은 것 같음, API 사용

    // expect(onSuccess.mock.calls.length).toBe(1);
    expect(onSuccess).toHaveBeenCalledTimes(1);

    // expect(onSuccess.mock.calls[0][0]).toBe('yes');
    expect(onSuccess).toHaveBeenCalledWith('yes');
    expect(onFail).toHaveBeenCalledTimes(0);
  });

  it('should call on Fail when predicate is true', () => {
    // true를 반환하는 predicate 임의로 선언
    check(() => false, onSuccess, onFail);

    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledWith('no');
    expect(onSuccess).toHaveBeenCalledTimes(0);
  });
});
