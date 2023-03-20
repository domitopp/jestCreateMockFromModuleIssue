import * as TestClassModule from "./TestClass";
import { TestClass } from "./TestClass";

describe("TestClass", () => {
  let instance: TestClass;

  beforeEach(() => {
    // Values passed in constructor will be ignored because constructor is mocked, too.
    instance = new (jest.createMockFromModule<typeof TestClassModule>("./TestClass").TestClass)("fooPropValue", 42);
  });

  it("should have propSetInConstructor", () => {
    expect(instance.propSetInConstructor).toBeDefined();
  });

  it("should have publicProp", () => {
    expect(instance.publicProp).toBeDefined();
  });

  it("should have mocked foo function", () => {
    // https://jestjs.io/docs/jest-object#function
    expect(instance.foo).toBeDefined();
    jest.mocked(instance.foo).mockImplementation(() => console.log("called mocked foo function"));
  });

  it("should have spyable getter bar", () => {
    expect(instance.bar).toBeDefined();
    jest.spyOn(instance, "bar", "get").mockReturnValue("another bar return value");
  });

  it("should have array prop", () => {
    // https://jestjs.io/docs/jest-object#array
    expect(instance.array).toEqual([]);
  });

  it("should have object prop", () => {
    // https://jestjs.io/docs/jest-object#object
    expect(instance.object).toEqual(expect.objectContaining({
      baz: "foo",
      bar: [9, 8, 7]
    }));
    expect(instance.object.foo).toBeDefined();
  });

  it("should have number prop", () => {
    // https://jestjs.io/docs/jest-object#primitives
    expect(instance.number).toBe(123);
  });

  it("should have string prop", () => {
    // https://jestjs.io/docs/jest-object#primitives
    expect(instance.string).toBe("baz");
  });

  it("should have boolean prop", () => {
    // https://jestjs.io/docs/jest-object#primitives
    expect(instance.boolean).toBe(true)
  });

  it("should have symbol prop", () => {
    // https://jestjs.io/docs/jest-object#primitives
    expect(instance.symbol).toEqual( Symbol.for("a.b.c"))
  });
});
