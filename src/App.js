import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Setting } from "./pages/pagesExporter";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={1000} style={{fontSize : "1.5rem"}} />
      <Routes>
        <Route path="/" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;
