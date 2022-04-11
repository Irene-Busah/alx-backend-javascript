/* Eslint-disabled */
export default function getStudentIdsSum(arrayItem) {
  const initialValue = 0;
  return arrayItem.reduce((previousValue, currentValue) => previousValue + currentValue.id, initialValue)
}
