import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Shared/Navbar';
import pubilcRoutes from './Routes/PubilcRoutes';
import Footer from './Components/Shared/Footer';
import PrivateRoute from './Authentication/PrivateRoute';
import PrivateRoutes from './Routes/PrivateRoutes';



function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        {
          pubilcRoutes.map(({ path, Componet }, index) => (
            <Route key={index} path={path} element={<Componet />} />
          ))
        }

        <Route element={<PrivateRoute/>}>
          {
            PrivateRoutes.map(({path, Componet},index)=>(
              <Route key={index} path={path} element={Componet}></Route>
            ))
          }
        </Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
