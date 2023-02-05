import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Create from "./pages/Create";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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

      <ToastContainer autoClose={10000} newestOnTop={true} />
    </>
  );
}

export default App;
