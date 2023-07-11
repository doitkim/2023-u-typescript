// function add(
//   n1: number,
//   n2: number,
//   showResult: boolean,
//   phrase: string
// ): number {
//   if (showResult) {
//     const result = n1 + n2;
//     console.log(phrase + result);
//   } else {
//     return n1 + n2;
//   }
// }

// const number1 = 5;
// const number2 = 2.8;
// const printResult = true;
// const resultPhrase = "Result is: ";

// add(number1, number2, printResult, resultPhrase);

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

enum Role {
  ADMIN = 100,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role.push("admin");
//person.role[1] = 10;

// person.role = [0, "admin", "user"];

let favoriteActivates: string[];
favoriteActivates = ["Sports"];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (Role.ADMIN === person.role) {
  console.log("is admin");
}

console.log(Role);
console.log(person);
