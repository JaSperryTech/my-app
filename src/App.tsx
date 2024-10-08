import React, { useEffect } from "react";

const connect = () => console.log("Connecting");
const disconnect = () => console.log("Disconnect");

const App = () => {
  useEffect(() => {
    connect();

    return () => disconnect();
  });
  return <div>App</div>;
};

export default App;
