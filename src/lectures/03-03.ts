// function createStudent(id: number, name: string, age: number) {
//   console.log(id, name, age);
// }
// createStudent(1, "Bob", 18);

// function createStudent(student: { id: number; name: string; age: number }) {
//   const { id, name, age } = student;
//   console.log(id, name, age);
// }
// createStudent({
//   id: 1,
//   name: "Bob",
//   age: 18,
// });

// function createStudent({ id, name, age }: { id: number; name: string; age: number }) {
//   console.log(id, name, age);
// }
// createStudent({
//   id: 1,
//   name: "Bob",
//   age: 18,
// });

interface Student {
  id: number;
  name: string;
  age: number;
}
function createStudent({ id, name, age }: Student) {
  console.log(id, name, age);
}
createStudent({
  id: 1,
  name: "Bob",
  age: 18,
} as Student);
