const sortByAge = require("./app");

test("Testing if the first user is Himanshu after sorting", () => {
  const sortedData = sortByAge();
  expect(sortedData[0].name).toBe("Himanshu");
});
test("Testing if the last user is Shubham after sorting", () => {
  const sortedData = sortByAge();
  expect(sortedData[sortedData.length - 1].name).toBe("Shubham");
  expect(sortedData.length).not.toBeNull();
});

test("sorted data should not be null", () => {
  const sortedData = sortByAge();
  expect(sortedData).not.toBe(undefined);
});
