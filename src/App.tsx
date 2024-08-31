import { Routes, Route, useLocation } from "react-router-dom";
import { AboutPage, ContactPage, HomePage } from "./pages";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes
        key={location.pathname}
        location={location}>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/contact"
          element={<ContactPage />}
        />
        <Route
          path="/about"
          element={<AboutPage />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
