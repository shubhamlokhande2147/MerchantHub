import './App.css';


import Login from './Pages/Login';
import ForgetPass from './Pages/ForgetPass';
import LandingPage from './Pages/LandingPage';

import Home from './Components/Merchant/Home';
import Merchant_Table from './Components/Merchant/Merchant_Table';
import NewMerchant from './Components/Merchant/NewMerchant';
import Update_Merchant from './Components/Merchant/Update_Merchant';
import Transaction from './Components/Merchant/Transaction';


//import Header from './Pages/Header';

import Header from './Pages/Header';

import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     
         <Routes>

          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/forgetpass' element={<ForgetPass/>}></Route>
          <Route path='/header' element={<Header/>}></Route>

          
          <Route path='/newmerchant' element={<NewMerchant/>}></Route>
          <Route path='/allmerchant' element={<Merchant_Table/>}></Route>
          <Route path='/allmerchant/updatemerchant/:id' element={<Update_Merchant />} />
          <Route path='/allmerchant/transaction/:id' element={<Transaction />} />

  



         </Routes>

     </BrowserRouter>


     {/* <Login/>
     <ForgetPass/>
     <NewMerchant/> */}


    </div>
  );
}

export default App;
