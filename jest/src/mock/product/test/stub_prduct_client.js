// 기존의 Product Client와 동일한 인터페이스를 갖고 있으면서,
// 네트워크에 의존하지 않으며 테스트할 수 있는 방식
class StubProductClient {
  async fetchItems() {
    return [
      { item: '🥛', available: true },
      { item: '🍒', available: false },
    ];
  }
}

module.exports = StubProductClient;
