const Stack = require('../stack');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    // 만들어진 스택을 확인하기 위해
    // 스택의 사이즈를 검사
    expect(stack.size()).toBe(0);
  });

  it('allows to push item', () => {
    stack.push('test');
    expect(stack.size()).toBe(1);
  });

  describe('pop', () => {
    it('throws an error if stack is empty', () => {
      expect(() => {
        stack.pop();
      }).toThrow('Stack is empty');
    });

    it('returns the last pushed item and removes it from the stack', () => {
      stack.push('banana');
      stack.push('apple');

      expect(stack.pop()).toBe('apple');
      expect(stack.size()).toBe(1);
    });
  });

  describe('peek', () => {
    it('throws an error if stack is empty', () => {
      expect(() => {
        stack.peek();
      }).toThrow('Stack is empty');
    });

    it('returns the last pushed item but keep it in the stack', () => {
      stack.push('banana');
      stack.push('apple');

      expect(stack.peek()).toBe('apple');
      expect(stack.size()).toBe(2);
    });
  });
});
