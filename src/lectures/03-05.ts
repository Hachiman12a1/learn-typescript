// interface Student {
//   id: number;
//   name: string;
// }
// const numberList: Array<number> = [1, 2, 3];
// const wordList: Array<string> = ["easy", "frontend"];
// const studentList: Array<Student> = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
// ];

// interface Student {
//   id: number;
//   name: string;
// }
// interface List<T> {
//   length: number;
//   [index: number]: T;
// }
// const numberList: List<number> = [1, 2, 3];
// const wordList: List<string> = ["easy", "frontend"];
// const studentList: List<Student> = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
// ];

// interface Student {
//     id: number,
//     name: string
// }
// type StudentKeys = keyof Student;
// const keys : StudentKeys = 'name'

// console.log(typeof 'easy frontend'); // 'string'
// console.log(typeof 123); // 'number'
// console.log(typeof false); // 'boolean'
// console.log(typeof {}); // 'object'
// console.log(typeof []); // 'object'
// console.log(typeof function() {}); // 'function'
// console.log(typeof window !== 'undefined'); // true on client, false on server

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;
