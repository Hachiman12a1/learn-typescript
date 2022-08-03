interface BusinessPartner {
  name: string;
  credit: number;
}
interface Identity {
  id: number;
  name: string;
}
interface Contact {
  email: string;
  phone: string;
}
// type Employee = Identity & Contact;
// type Customer = BusinessPartner & Contact;

// interface way
// interface Employee extends Identity, Contact {}
// interface Customer extends BusinessPartner, Contact {}

type Customer = BusinessPartner & Contact;
let c: Customer = {
  name: "ABC Inc.",
  credit: 1000000,
  email: "sales@abcinc.com",
  phone: "(408)-897-5735",
};
type Employee = Identity & BusinessPartner & Contact;
let e: Employee = {
  id: 100,
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "(408)-897-5684",
  credit: 1000,
};

interface Student {
  id: number;
  name: string;
}
// declaration merging
// works, no error
// interface Student {
//   age?: number;
// }
const alice: Student = {
  id: 1,
  name: "Alice",
  age: 0
};

// type Student1 = {
//     id: number;
//     name: string;
//     }
//     // ts error: Duplicate identifier 'Student1'.
//     type Student1 = {
//     age?:
