import './App.css';
import Navbar from './Components/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import NotFoundPage from './Components/Shared/NotFoundPage';
import Footer from './Components/Shared/Footer';

function App() {
  return (
    <>
     <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="homepage" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
