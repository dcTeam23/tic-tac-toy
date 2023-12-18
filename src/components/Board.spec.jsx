import { fireEvent, render } from '@testing-library/react';
import { Board } from './Board';

describe('Board', () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let utils;
  beforeEach(() => (utils = render(<Board />)));

  describe('render state with buttons', () => {
    /** @type {HTMLButtonElement[]} */
    let buttons;

    beforeEach(() => (buttons = utils.getAllByRole('button')));

    it('with 9 buttons', () => {
      expect(buttons).toHaveLength(9);
    });

    it('with empty state in each button', () => {
      buttons.forEach((btn) => expect(btn).toBeEmptyDOMElement());
    });
  });

  it('handle taking turn', () => {
    const [firstBtn, secondbtn] = utils.getAllByRole('button');

    fireEvent.click(firstBtn);
    expect(firstBtn).toHaveTextContent('X');

    fireEvent.click(secondbtn);
    expect(secondbtn).toHaveTextContent('O');
  });

  it.todo('declare winner');
});
