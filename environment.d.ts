declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SOME_VALUE: string;
    }
  }
}

export {};
