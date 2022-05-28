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
import Users from './Components/Dashboard/User';
import MyProfile from './Components/Dashboard/MyProfile';
import AllReview from './Components/Dashboard/AllReview';
import Addproduct from './Components/Dashboard/Addproduct';
import AllBookingProduct from './Components/Dashboard/AllBookingProduct';



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
            <Route index element={<MyBooking/>}></Route>
            <Route path='mybooking' element={<MyBooking/>}></Route>
            <Route path='addreview' element={<AddReview/>}></Route>
            <Route path='myprofile' element={<MyProfile/>}></Route>
          </Route>
        </Route>

        <Route element={<AdminRoute/>}>
          <Route path='/dashboard' element={<Dashboard/>}>
            <Route path='allBookingList' element={<AllBookingProduct/>}></Route>
            <Route path='addproduct' element={<Addproduct/>}></Route>
            <Route path='alluser' element={<Users/>}></Route>
            <Route path='allreview' element={<AllReview/>}></Route>
          </Route>
        </Route>

        
      </Routes>
    
      <Footer></Footer>
    </>
  );
}

export default App;
