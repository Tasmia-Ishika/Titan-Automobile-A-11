import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Shared/Footer/Footer';
import Register from './Pages/Login/Register/Resgister';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/Shared/NotFound/NotFound';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Inventory from './Pages/Inventory/Inventory';
import AddProducts from './Pages/AddProducts/AddProducts';
import MyItem from './Pages/MyItems/MyItem';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/addProduct" element={
          <RequireAuth>
            <AddProducts></AddProducts>
          </RequireAuth>
        }></Route>
        <Route path="/myItem" element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>
        <Route path="/manageInventory" element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path="/inventory/:id" element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>

  );
}

export default App;
