import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Maps from "./components/Maps";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<div>main</div>} />
            <Route path="/maps" element={<Maps />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
