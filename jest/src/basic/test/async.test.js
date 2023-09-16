const fetchProduct = require('../async');

// Jest의 it(=test) 코드는 동기적으로 처리되기 때문에,
// 비동기 코드의 성공 여부와 관계없이 passed된다.
// 여러 가지 방법으로 비동기 테스트를 구현할 수 있다.

describe('Async', () => {
  // 1. it 파라미터로 done을 넘겨주고, 종료 시점에 호출하면 된다.
  it('async-done', (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 200 });
      done();
    });
  });

  // 2. 코드블럭을 return 해주면 된다. 보기에도 간단하고,
  // 처리속도도 상대적으로 빠르다.
  it('async-return', () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 200 });
    });
  });

  // 3. async - await를 통한 구현
  it('async-await', async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: 'Milk', price: 200 });
  });

  // 4. async - resolves / reject
  it('async-resolves', () => {
    return expect(fetchProduct()).resolves.toEqual({ item: 'Milk', price: 200 });
  });

  it('async-reject', () => {
    return expect(fetchProduct('error')).rejects.toBe('network error');
  });
});
