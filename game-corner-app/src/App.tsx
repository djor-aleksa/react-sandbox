import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";
import ListGroup from "./Components/ListGroup";

function App() {
  let cities = ["Beograd", "Niš", "Novi Sad", "Sarajevo", "Skoplje"];
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleSelectItem = (item: string) => {
    alert(item);
  };

  const handleCloseClick = () => {
    setAlertVisibility(false);
  };
  // props should be immutable!
  // state is mutable
  return (
    <div>
      <Button
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        My button
      </Button>
      {alertVisible && (
        <Alert onCloseClicked={handleCloseClick}>Hello there</Alert>
      )}
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={(item: string) => alert(item)}
      ></ListGroup>
    </div>
  );
}

export default App;
