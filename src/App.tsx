import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from "./components/ThemeProvider";
import Contribute from "./pages/Contribute";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="flex flex-col min-h-screen min-h-[100dvh]">
          <Navbar />
          <main className="flex-1 flex items-center justify-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contribute" element={<Contribute />} />
            </Routes>
          </main>

        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;