// 1. Number enum

enum Status1 {
  PENDING, // 0
  IN_PROGRESS, // 1
  DONE, // 2
  CANCELLED, // 3
}
enum Status2 {
  PENDING = 3, // 3
  IN_PROGRESS, // 4
  DONE, // 5
  CANCELLED, // 6
}
enum Status3 {
  PENDING = 3,
  IN_PROGRESS = 5,
  DONE = 8,
  CANCELLED = 10,
}

enum Status4 {
  PENDING, // 0
  IN_PROGRESS, // 1
  DONE, // 2
  CANCELLED, // 3
}
// can assign any number to your enum variable
const stats1: Status4 = Status4.PENDING;
const stats2: Status4 = 1;
const stats3: Status4 = -1;
// number enum --> support reverse mapping
console.log(Status4[0]); // 'PENDING'
console.log(Status4["DONE"]); // 2

// 2. String enum
enum MediaTypes {
  JSON = "application/json",
  XML = "application/xml",
}
fetch("https://example.com/api/endpoint", {
  headers: {
    Accept: MediaTypes.JSON,
  },
}).then((response) => {
  // ...
});
