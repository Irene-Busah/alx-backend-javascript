/* Eslint-disabled */
export default function getListStudentIds(arrayItems) {
  if (!Array.isArray(arrayItems)) {
    return [];
  }
  return arrayItems.map((item) => {
    return item.id;
  });
};
