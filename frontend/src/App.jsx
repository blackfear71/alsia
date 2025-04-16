import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import Home from "./pages/home/home";
import TestFeature from "./pages/testFeature/testFeature";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Accueil : route par défaut */}
            <Route index element={<Home />} />

            {/* Page de test */}
            <Route path="testPage" element={<TestFeature />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
