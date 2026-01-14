import { useState, useEffect } from "react";
import { Feed } from "./components/feed";
import { PinPage } from "./components/PinPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { AboutModal } from "./components/AboutModal";

function App() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Состояние поиска
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenWelcomeModal");

    if (!hasSeenModal) {
      setIsModalOpen(true);
    }

    fetch("./db.json")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Ошибка загрузки JSON:", err));
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    localStorage.setItem("hasSeenWelcomeModal", "true");
  };

  return (
    <Router>
      <div id="portal"></div>
      {isModalOpen && (
        <AboutModal onClose={closeModal} darkButtonVisibility={"md:hidden"} />
      )}
      <div className="flex min-h-screen dark:bg-zinc-800 bg-zinc-50">
        <Sidebar />
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <Feed
                  items={items}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
              }
            />
            <Route path="/pin/:id" element={<PinPage items={items} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
