/** 将对象变为可索引对象 */
type ToIndexable<T> = T & Record<string | number, T[keyof T]>;
