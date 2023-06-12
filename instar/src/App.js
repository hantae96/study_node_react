import './App.css';
import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Test from './components/test';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    
  return (
    <div className="App">
    <Test></Test>
    <Form></Form>
    </div>
  );
}

export default App;
