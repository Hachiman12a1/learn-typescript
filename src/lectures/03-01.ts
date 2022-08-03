function getStatusName(state: "active") {
  console.log(state);
}

// solution 1
// let s: 'active' = 'active'; // or const s = 'active'
// getStatusName(s);

// solution 2
let s = "active"; // let s: string
getStatusName(s as "active");
