import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

const user = userEvent.setup();

describe("Form", () => {
  it("初期状態ではテキストは空欄", () => {
    render(<Form></Form>);
    const input = screen.getAllByPlaceholderText("Enter text");
    expect(input[0]).toBeInTheDocument();
    expect(input[0]).toHaveTextContent("");
  });

  it("入力されたテキストがサブミットされる", async () => {
    const alertSpy = jest.spyOn(window, "alert").mockReturnValue();
    render(<Form></Form>);
    const input = screen.getByPlaceholderText("Enter text");
    await user.type(input, "Test Text");
    expect(screen.getByDisplayValue("Test Text")).toBeInTheDocument();

    const button = screen.getByRole("button");
    await user.click(button);
    expect(alertSpy).toHaveBeenCalledWith("submitted: Test Text");
    alertSpy.mockReset();
  });
});
