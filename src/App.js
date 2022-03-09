import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Main from "./components/pages/main/main";
import MissingPage from "./components/pages/missingpage/missingPage";
import Footer from "./components/views/footer/footer";
import Header from "./components/views/header/header";
import SingleTable from "./components/views/singleTable/singleTable";
import { fetchOptions } from "./redux/optionsRedux";
import { fetchTables } from "./redux/tablesRedux";

function App() {
  
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTables()), [dispatch]);
  useEffect(() => dispatch(fetchOptions()), [dispatch])

  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/tables/:id" element={<SingleTable />} />
          <Route path="*" element={<MissingPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
