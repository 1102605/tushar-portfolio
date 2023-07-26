import { useState, useEffect } form 'react';
import {ethers} from 'ethers';
import {contractAbi, contractAddress} from './Constant/constant';
import logoin from './Components/login';
import './App.css';



function App() {
  return (
    <div className="App">
      <Login/>
   
    </div>
  );
}

export default App;
