export type Fork = {
  use<T>(plugin: Plugin<T>): T;
};

export type Plugin<T> = (fork: Fork) => T;

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
