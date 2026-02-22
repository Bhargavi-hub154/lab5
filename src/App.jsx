import { useState } from "react";
import AuthPage from "./components/AuthPage";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {isAuthenticated ? (
        <h1 className="welcome-text">Logged in</h1>
      ) : (
        <AuthPage setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
}

export default App;
