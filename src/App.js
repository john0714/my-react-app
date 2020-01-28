import React from 'react';
import './App.css';

import Header from "./Header";
import StudyList from "./List";
import Form from "./Form";

function App() {
  return (
    <div className="main">
      <Header/>
      <p>TODOが追加できるよ</p>
      <StudyList/>
      <Form/>
    </div>
  );
}

export default App;
