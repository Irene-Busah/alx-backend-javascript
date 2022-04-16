interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
};

let student_one: Student = {
  firstName: "Irene",
  lastName: "Busah",
  age: 21,
  location: "Kigali"
}

let student_two: Student = {
  firstName: "Nelson",
  lastName: "Nor",
  age: 20,
  location: "Accra"
};

let studentList: Student[] = [student_one, student_two];

let table = document.createElement('table');
document.body.appendChild(table);

studentList.map((item: Student) => {
  let tr = document.createElement('tr');
  table.appendChild(tr);
  let tdElement = document.createElement('td');
  tdElement.innerHTML = item.firstName;
  tr.appendChild(tdElement);
  let tdElement2 = document.createElement('td');
  tdElement2.innerHTML = item.location;
  tr.appendChild(tdElement2);

  return tr;
});
