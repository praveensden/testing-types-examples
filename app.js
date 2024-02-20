const users = [
  {
    id: 1,
    name: "Praveen",
    age: 28,
  },
  {
    id: 2,
    name: "Balendra",
    age: 30,
  },
  {
    id: 3,
    name: "Shubham",
    age: 81,
  },
  {
    id: 4,
    name: "Himanshu",
    age: 21,
  },
];

const sortByAge = () => {
  const data = users.sort((a, b) => a.age - b.age);
  return data;
};

// console.log(sortByAge());

module.exports = sortByAge;
