import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./routes/Index";
import Admin from "./routes/Admin";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
