import dotenv from 'dotenv';

dotenv.config();

export function test() {
  return {
    message: 'Hello, world!',
    testValue: process.env.SOME_VALUE,
  };
}

const result = test();
console.log(result);
