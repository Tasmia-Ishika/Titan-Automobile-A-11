import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Blogs from './Pages/Blogs/Blogs';
import { createContext, useState } from 'react';
import Footer from './Pages/Shared/Footer/Footer';
import Register from './Pages/Login/Register/Resgister';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/Shared/NotFound/NotFound';
import DetailsOfProduct from './Pages/DetailsOfProduct/DetailsOfProduct';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Checkout from './Pages/Checkout/Checkout';
import Inventory from './Pages/Inventory/Inventory';



export const ProductContext = createContext();

function App() {

  const [products, setProducts] = useState([]);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/detail/:detailId" element={<DetailsOfProduct></DetailsOfProduct>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="/inventory/:Id" element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </ProductContext.Provider>

  );
}

export default App;
