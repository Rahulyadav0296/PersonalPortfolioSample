import React from "react";

function ListItem({ name, onClick }) {
  return (
    <>
      <li onClick={onClick}>
        <a href={`#${name === "Home" ? "intro" : name.toLowerCase()}`}>
          {name}
        </a>
      </li>
    </>
  );
}

export default ListItem;
