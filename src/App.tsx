/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react";

const App = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });
  const [isLoading, setLoading] = useState(false);

  return <div></div>;
};

export default App;
