import { Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import Main from "./pages/main";
import Collection from "./pages/collection";
import Header from "./components/layout/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </>
  );
}

export default App;
