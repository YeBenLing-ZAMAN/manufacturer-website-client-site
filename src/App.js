import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Shared/Navbar';
import pubilcRoutes from './Routes/PubilcRoutes';
import Footer from './Components/Shared/Footer';
import PrivateRoute from './Authentication/PrivateRoute';
import PrivateRoutes from './Routes/PrivateRoutes';
import Dashboard from './Components/Dashboard/Dashboard';
import AdminRoute from './Authentication/AdminRoute';
import Addservice from './Components/Dashboard/Addservice';
import AddAdmin from './Components/Dashboard/AddAdmin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyBooking from './Components/Dashboard/MyBooking';
import AddReview from './Components/Dashboard/AddReview';



function App() {
  return (
    <>
      <Navbar></Navbar>
      <ToastContainer />
      <Routes>
        {
          pubilcRoutes.map(({ path, Componet }, index) => (
            <Route key={index} path={path} element={<Componet />} />
          ))
        }

        <Route element={<PrivateRoute/>}>
          {
            PrivateRoutes.map(({path, Componet},index)=>(
              <Route key={index} path={path} element={<Componet />}></Route>
            ))
          }
        </Route>

        <Route element={<PrivateRoute/>}>
          <Route path='/dashboard' element={<Dashboard/>}>
            <Route path='mybooking' element={<MyBooking/>}></Route>
            <Route path='addreview' element={<AddReview/>}></Route>
          </Route>
        </Route>

        <Route element={<AdminRoute/>}>
          <Route path='/dashboard' element={<Dashboard/>}>
            <Route path='addservice' element={<Addservice/>}></Route>
            <Route path='addadmin' element={<AddAdmin/>}></Route>
          </Route>
        </Route>

        
      </Routes>
    
      <Footer></Footer>
    </>
  );
}

export default App;
