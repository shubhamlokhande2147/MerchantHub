import './App.css';


import Login from './Components/Login';
import ForgetPass from './Components/ForgetPass';
import NewMerchant from './Components/NewMerchant';
import Home from './Components/Home';


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

         </Routes>

     </BrowserRouter>



     {/* <Login/>
     <ForgetPass/>
     <NewMerchant/> */}


    </div>
  );
}

export default App;
