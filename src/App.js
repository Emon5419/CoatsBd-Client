import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home/Home';
import Inventory from './pages/Inventory/Inventory';
import NotFound from './pages/NotFound/NotFound';
import Header from './pages/shared/Header/Header';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register/Register';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';

import ProductDetail from './pages/Home/ProductDetail/ProductDetail';
import AddItems from './pages/AddItems/AddItems';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>

        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/product/:productId'
          element={
            <RequireAuth>
              <ProductDetail></ProductDetail>
            </RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>

        <Route path='/addItems' element={<RequireAuth><AddItems></AddItems></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
