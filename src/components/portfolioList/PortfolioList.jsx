import "./portfolioList.scss";

import React from "react";

function PortfolioList({ active, name, setSelected }) {
  return (
    <>
      <li
        className={active ? "portfoliolist active" : "portfoliolist"}
        onClick={() => {
          setSelected(name.id);
        }}
      >
        {name.title}
      </li>
    </>
  );
}

export default PortfolioList;
