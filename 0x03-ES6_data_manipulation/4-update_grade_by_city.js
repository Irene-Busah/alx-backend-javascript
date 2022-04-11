/* Eslint-disabled */
export default function updateStudentGradeByCity(arrayItem, city, newGrades) {
  const newArray = arrayItem.map((student) => {
    const studentGrade = newGrades.filter((ele) => ( ele.studentid === arrayItem.id )).map((value) => value.grade)[0];
    student["grade"] = studentGrade || 'N/A';
    return student;
  })
  return newArray.filter((ele) => (ele.location === city));
};
