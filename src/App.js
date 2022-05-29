import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HommePage";
import VolcanoTable from "./Pages/VolcanoTable";
import NotFoundPage from "./Pages/NotFound";
import Login from "./Pages/Login";
import ListVolcanoes from "./Pages/ListVolcanoes";
import BasicTable from "./components/table";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/volcanoes" element={<VolcanoTable />} />
        <Route path="/login" element={<Login />} />
        <Route path="/volcano/:id" element={<ListVolcanoes />} />
        <Route path="/table" element={<BasicTable />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //     {/* {volcanoData.map((volcanoData) => {
    //       return <div>
    //         <h2>{volcanoData}</h2>
    //         </div>
    //     })} */}
    //     <Button variant="contained" onClick={handlerClick}>Hello World</Button>

    // </div>
  );
}

export default App;
