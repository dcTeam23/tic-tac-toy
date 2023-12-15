import { useState } from "react";
import './Square.css';

export function Square({ value }) {
  const [content, setContent] = useState(value);

  return (
    <button
      className="square"
      onClick={() => {
        setContent('X')
      }}
    >
      {content || '*'}
    </button>
  );
}
