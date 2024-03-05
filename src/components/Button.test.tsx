import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("buttonタグがレンダリングされる", () => {
    render(<Button label="ボタン" onClick={() => alert("click")}></Button>);

    const element = screen.getAllByRole("button");
    expect(element[0]).toBeInTheDocument();
    expect(element[0]).toHaveTextContent("ボタン");
  });
});
