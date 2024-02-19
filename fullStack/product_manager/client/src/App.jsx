import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './assets/components/Main';
import Detail from './assets/components/Detail';
import Update from './assets/components/Update';

function App() {
  return (

    <>
      <Routes>
        <Route element={<Main />} path="/products/" />
        <Route element={<Detail />} path="/products/:id" />
        <Route element={<Update />} path="/products/:id/edit" />
      </Routes>
    </>

  );
}
export default App;

