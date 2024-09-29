import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisable, setAlertVisability] = useState(false);

  return (
    <div>
      {alertVisable && (
        <Alert onClose={() => setAlertVisability(false)}>Test Alert</Alert>
      )}
      <Button onClick={() => setAlertVisability(true)}>Test</Button>
    </div>
  );
}

export default App;
