import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Pomodor from "./Components/Pomodor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pomodor" element={<Pomodor />} />
    </Routes>
  );
}

export default App;
