import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./Website/Landing/Landing";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Landing />} path="/" />
      </Routes>
    </Router>
  );
}

export default App;
