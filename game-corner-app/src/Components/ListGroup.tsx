function ListGroup() {
  let cities = ["Beograd", "Niš", "Novi Sad", "Sarajevo", "Skoplje"];
  //cities = [];
  {
    cities.map((city) => <li>{city}</li>);
  }

  return (
    <>
      <h1>List</h1>
      {cities.length === 5 && <p>No cities to display</p>}
      <ul className="list-group">
        {cities.map((city) => (
          <li
            key={city}
            onClick={() => alert(`Clicked ${city}`)}
            className="list-group-item"
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
