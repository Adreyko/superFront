import { render, screen } from "@testing-library/react";
import Button, { ThemeButton } from "./Button";
import cls from "../Button/Button.module.scss";

describe("classnames", () => {
  test("test button with one param", () => {
    render(<Button className={cls.button}>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });
  test("test button with one theme class ", () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
    screen.debug()
  });
});
