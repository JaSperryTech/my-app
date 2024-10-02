import { useState } from "react";

function App() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipcode: "94111",
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipcode: "94112" },
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
export default App;
