import { render } from "@testing-library/react";
import { Board } from "./Board";

describe("Board", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let utils;
  beforeEach(() => (utils = render(<Board />)));

  describe("render state with buttons", () => {
    /** @type {HTMLButtonElement[]} */
    let buttons;

    beforeEach(() => (buttons = utils.getAllByRole("button")));

    it("with 9 buttons", () => {
      expect(buttons).toHaveLength(9);
    });

    it("with empty state in each button", () => {
      buttons.forEach((btn) => expect(btn).toBeEmptyDOMElement());
    });
  });

  it.todo("render state with 9 buttons");
  it.todo("render state with empty buttons");
  it.todo("handle taking turn");
  it.todo("declare winner");
});
