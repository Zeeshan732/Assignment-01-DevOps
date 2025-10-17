const sayHello = require("./app");

test("prints DevOps Assignemnt", () => {
  expect(sayHello()).toBe("DevOps Assignment 01");
});