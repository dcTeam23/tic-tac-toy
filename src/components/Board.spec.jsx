import { render } from "@testing-library/react";
import { Board } from "./Board";


describe('Board', () => {
  beforeEach(() => render(<Board />));
  
  it.todo('render state with 9 buttons');
  it.todo('render state with empty buttons');
  it.todo('handle taking turn');
  it.todo('declare winner');
});