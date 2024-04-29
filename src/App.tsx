import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/ui/theme-provider";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
    <Navbar/>
<Home/>
  </BrowserRouter>
  </ThemeProvider>

  )
}
export default App;
