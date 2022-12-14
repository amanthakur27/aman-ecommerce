import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Forgot from './component/Forgot';
import PrivateRoute from './component/PrivateRoute';
import Product from './component/Product';
import Cart from './component/Cart';
import Add from './component/Add';
import AddItem from './component/AddItem';

// const PrivteRoute = (props)=>{
//   const user1= sessionStorage.getItem('user')
//   if(user1){
//     return<Route exact={true} path={props.path} element={props.element} />
//   }else{
//     return<Login {...props}/>
//   }
// }


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes >
          <Route path='/' element={<PrivateRoute Component={Dashboard} />} />
          <Route path='products' element={<PrivateRoute Component={Product} />} />
          <Route path='cart' element={<PrivateRoute Component={Cart} />} />
          {/* <Route path='/products' element={<Product/>} /> */}
          <Route path='login' element={<Login />} />
          <Route path='forgot' element={<Forgot />} />
          <Route
            path="*"
            element={<PrivateRoute Component={Dashboard} />}
          />
          <Route path='add' element={<Add/>}></Route>
          <Route path='additem' element={<PrivateRoute Component={AddItem} />}/>
         

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
