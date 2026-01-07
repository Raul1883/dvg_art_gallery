import { useState, useEffect } from "react";
import { Feed } from "./components/feed";
import { PinPage } from "./components/PinPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [items, setItems] = useState([]); // Состояние, где будут лежать наши арты

  useEffect(() => {
    // Этот код сработает ОДИН раз при загрузке сайта
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Ошибка загрузки JSON:", err));
  }, []);

  return (
    <Router>
      <div className="app-container">
        {/* Тут можно оставить Header, чтобы он был везде */}
        <Routes>
          <Route path="/" element={<Feed items={items} />} />
          <Route path="/pin/:id" element={<PinPage items={items} />}/> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
