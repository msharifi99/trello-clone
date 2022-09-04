function findItemByProperty<T, K extends keyof T>(
  property: K,
  value: T[K],
  array: T[]
) {
  return array.find((item) => item[property] === value);
}

export default findItemByProperty;
