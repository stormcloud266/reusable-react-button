import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Button from "./components/Button/Button";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <Button to="/">Click Me</Button>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
