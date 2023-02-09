import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Create from "./pages/Create";
import Notes from "./pages/Notes";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { createTheme, ThemeProvider } from "@mui/material";
import "@fontsource/quicksand/400.css";
import "@fontsource/quicksand/500.css";
import "@fontsource/quicksand/600.css";
import "@fontsource/quicksand/700.css";

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3867d0"
      }
    },
    typography: {
      fontFamily: "'Quicksand', sans-serif;",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Layout>
      </Router>

      <ToastContainer autoClose={10000} newestOnTop={true} />
    </ThemeProvider>
  );
}

export default App;
