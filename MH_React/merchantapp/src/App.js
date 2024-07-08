import './App.css';


import Login from './Components/Login';
import ForgetPass from './Components/ForgetPass';
import NewMerchant from './Components/NewMerchant';

import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     
     <Login/>
     <ForgetPass/>
     <NewMerchant/>


    </div>
  );
}

export default App;
