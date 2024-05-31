import ListItem from "../ListItem";
import "./menu.scss";

function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")} id="menu">
      <ul>
        <ListItem
          name="Home"
          onClick={() => {
            setMenuOpen((prev) => !prev);
          }}
        />
        <ListItem
          name="Works"
          onClick={() => {
            setMenuOpen((prev) => !prev);
          }}
        />
        <ListItem
          name="Portfolio"
          onClick={() => {
            setMenuOpen((prev) => !prev);
          }}
        />
        <ListItem
          name="Testimonials"
          onClick={() => {
            setMenuOpen((prev) => !prev);
          }}
        />
        <ListItem
          name="Contact"
          onClick={() => {
            setMenuOpen((prev) => !prev);
          }}
        />
      </ul>
    </div>
  );
}

export default Menu;
