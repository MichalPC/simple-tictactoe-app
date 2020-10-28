import React from "react";
import './Square.css';

function Square({ value, onClick }) {
  const style = value  ? `squares ${value}` : `squares`;

  return (
    <div className={style} onClick={onClick}>
        {value}
    </div>
  );
}

export default Square;
