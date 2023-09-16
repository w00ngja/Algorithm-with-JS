const ProductService = require('../product_service_no_di.js');
const ProductClient = require('../product_client.js');

// ProductClient의 서버 통신을 통해 데이터를 가져온 후,
// ProductService의 fetchAvailableItems 로직만을 테스트하여 받아온 데이터의 아이템들이 유효한지 테스트하고 싶음

jest.mock('../product_client');

describe('ProductService', () => {
  const fetchItems = jest.fn(async () => [
    { item: '🥛', available: true },
    { item: '🍒', available: false },
  ]);

  ProductClient.mockImplementation(() => {
    return { fetchItems };
  });
  let productService;

  beforeEach(() => {
    // 이렇게 구성하면 내부적으로 ProductClient의 ProductService 또한 테스트된다.
    // 이는 네트워크 상태에 의존적인 코드는 좋지 않다!
    productService = new ProductService();
  });

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: '🥛', available: true }]);
  });
});
