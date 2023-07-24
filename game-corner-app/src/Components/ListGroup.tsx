import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook - used for tapping into the React features, this is a State hook
  // const arr = useState(-1);
  // arr[0] // variable (selectedIndex)
  // arr[1] // updater function
  //cities = [];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [name, setName] = useState("");

  items.map((item) => <li>{item}</li>);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 5 && <p>No cities to display</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => onSelectItem(item)}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
