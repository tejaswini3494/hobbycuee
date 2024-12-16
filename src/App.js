import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AddNew from "./pages/AddNew";
// import ScrollUpButton from "./common/ScrollUpButton";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-new" element={<AddNew />} />
      </Routes>
      {/* <ScrollUpButton /> */}
    </BrowserRouter>
  );
}

export default App;
