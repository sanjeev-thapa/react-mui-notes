import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Create from "./pages/Create";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
