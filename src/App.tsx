import { Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import Main from "./pages/main";
import Collection from "./pages/collection";
import FAQ from "./pages/About";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<FAQ />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
