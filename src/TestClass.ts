export class TestClass {
  propSetInConstructor: string;
  constructor(prop: string, public publicProp: number) {
    this.propSetInConstructor = prop
  }

  foo() {
    return;
  }

  get bar(): string {
    return "bar return value";
  }

  array: number[] = [1,2,3]

  object = {
    baz: "foo",
    bar: [9,8,7],
    foo() {}
  }

  number: number = 123

  string: string = "baz"

  boolean: boolean = true

  symbol: Symbol = Symbol.for("a.b.c")
}