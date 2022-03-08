import { Route, Routes } from "react-router-dom";
import Main from "./components/pages/main/main";
import MissingPage from "./components/pages/missingpage/missingPage";
import Tables from "./components/pages/tables/tables";
import Footer from "./components/views/footer/footer";
import Header from "./components/views/header/header";

function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/tables/:id" element={<Tables />} />
          <Route path="*" element={<MissingPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;