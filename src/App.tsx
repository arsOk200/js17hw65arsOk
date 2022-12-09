import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Page from "./Containers/Page/Page";
import PageForm from "./Containers/Page-Form/PageForm";

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Page/>}/>
          <Route path='/pages/:PageName' element={<Page/>}/>
          <Route path='/pages/admin' element={<PageForm/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
