import { screen, render, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { Select } from ".";

const onOptionSelected = vi.fn();

const options = [
  {
    label: "Option 1",
    value: "option1",
  },
  {
    label: "Option 2",
    value: "option2",
  },
  {
    label: "Option 3",
    value: "option3",
  },
];

describe("Select", () => {
  it("needs to have no accessibility violations", async () => {
    render(<Select options={options} onChange={onOptionSelected} />);

    expect(screen.getByRole("combobox")).toHaveValue("option1");

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "option3" },
    });

    expect(onOptionSelected).toHaveBeenCalledTimes(1);
    expect(screen.getByRole("combobox")).toHaveValue("option3");
  });
});
