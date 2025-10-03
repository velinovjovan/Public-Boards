import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>📋 Public Boards 📋</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Create New Board</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
