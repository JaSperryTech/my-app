import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  const items = ["New York", "Los Angeles", "San Angeles"]

  return (
    <div>
      <ListGroup heading="Miami" items={items} onSelectItem={() => console.log(items)} />
    </div>
  );
}

export default App;
