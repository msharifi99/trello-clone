function findById<T extends { id: number | string }>(
  id: number | string,
  array: T[]
) {
  return array.find((item) => item.id === id);
}

export default findById;
