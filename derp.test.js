const myModule = require("./derp");

describe("myModule", () => {
  
  test("bar", () => {
    const result = myModule.bar();
    expect(result).toBe("bar");
  });

  test("foo", () => {
    jest.spyOn(myModule, "bar").mockReturnValueOnce("bar-mock");
    const result = myModule.foo();
    expect(result).toBe("I am foo. bar is bar-mock");
  });

});