
import './App.css';
import Home from './Home'
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Error from './Error';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Navbar />
//         <Home />
//       </header>
//     </div>
//   );
// }
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
