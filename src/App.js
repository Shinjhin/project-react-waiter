import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Dropdown from "./components/common/dropdown/dropdown";
import Main from "./components/pages/main/main";
import MissingPage from "./components/pages/missingpage/missingPage";
import Tables from "./components/views/tables/tables";
import Footer from "./components/views/footer/footer";
import Header from "./components/views/header/header";
import SingleTable from "./components/views/singleTable/singleTable";
import { fetchTables } from "./redux/tablesRedux";

function App() {

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/tables/:id" element={<Tables />} />
          <Route path="*" element={<MissingPage />} />
        </Routes>
      <Footer />
      <SingleTable />
      <Dropdown />
    </div>
  );
}

export default App;