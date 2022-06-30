import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Setting } from "./pages/pagesExporter";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;
