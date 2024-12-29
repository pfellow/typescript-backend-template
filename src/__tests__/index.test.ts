import { describe, it, expect } from 'vitest';

import { test } from '../index';

describe('test', () => {
  it('should return "Hello World"', () => {
    expect(test()).toEqual({
      message: 'Hello, world!',
      testValue: '123',
    });
  });
});
