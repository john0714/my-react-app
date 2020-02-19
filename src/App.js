import React from 'react';
import './App.css';

import Header from "./Header";
import StudyList from "./List";

function App() {
  return (
    <div className="main">
      <Header/>
      <p>TODOが追加できるよ</p>
      <StudyList/>
    </div>
  );
}

export default App;
