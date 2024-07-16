import './App.css';


import Login from './Components/Login';
import ForgetPass from './Components/ForgetPass';

import Home from './Components/Merchant/Home';
import Merchant_Table from './Components/Merchant/Merchant_Table';
import NewMerchant from './Components/Merchant/NewMerchant';
import Update_Merchant from './Components/Merchant/Update_Merchant';


import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     
         <Routes>

          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/forgetpass' element={<ForgetPass/>}></Route>
          
          <Route path='/newmerchant' element={<NewMerchant/>}></Route>
          <Route path='/allmerchant' element={<Merchant_Table/>}></Route>
          <Route path='/allmerchant/updatemerchant/:id' element={<Update_Merchant />} />




         </Routes>

     </BrowserRouter>



     {/* <Login/>
     <ForgetPass/>
     <NewMerchant/> */}


    </div>
  );
}

export default App;
