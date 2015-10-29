// type definitions for (some of) underscore

declare module "underscore" {

  declare function map<T, U>(a: T[], iteratee: (val: T, n?: number)=>U): U[];
  declare function map<K, T, U>(a: {[key:K]: T}, iteratee: (val: T, k?: K)=>U): U[];

}
