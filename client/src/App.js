
import Home from './components/Home'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Signup from './components/Signup';
import Login from './components/Login';
import Error from './components/Error';
import Dashboard from './components/Dashboard';
import FinalHome from './components/FinalHome';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='finalhome' element={<FinalHome />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App;
