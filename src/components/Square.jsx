import { useState } from 'react';
import './Square.css';

/**
 * @typedef {{onClick: () => void, value: string}} Props
 *
 * @param {Props} param0
 * @returns
 */
export function Square({ onClick, value }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}
