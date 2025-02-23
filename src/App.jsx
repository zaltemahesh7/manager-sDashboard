import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DashboardPage from "./pages/page";
import Header from "./components/header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gray-100">
        <Header />
        <div className="container mx-auto">
          <DashboardPage />
        </div>
      </div>
    </>
  );
}

export default App;
