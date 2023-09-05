import { classNames } from "./className";

describe("classNames", () => {
  test("with one param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });
  test("with two params", () => {
    expect(classNames("someClass", { hovered: true })).toBe(
      "someClass hovered"
    );
  });
  test("with all params", () => {
    expect(classNames("someClass", { hovered: true }, ["cls", "cls2"])).toBe(
      "someClass cls cls2 hovered"
    );
  });
});
