import { Route, Routes } from "react-router-dom";
import Main from "./components/pages/main/main";
import MissingPage from "./components/pages/missingpage/missingPage";
import Tables from "./components/pages/tables/tables";
import NavBar from "./components/views/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/tables/:id" element={<Tables />} />
          <Route path="*" element={<MissingPage />} />
        </Routes>
    </div>
  );
}

export default App;