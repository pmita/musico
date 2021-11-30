import './App.css';
// ROUTING
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom'
// PAGES
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
// COMPONENTS
import Navbar from './components/Navbar';
// HOOKS
import { useAuthContext } from './hooks/useAuthContext';
import Create from './pages/create/Create';
import Song from './pages/song/Song';

function App() {
  // STATE
  const { user } = useAuthContext()

  // FUNCTIONS
  const PrivateRouteToLogin = () => {
    return user ? <Outlet /> : <Navigate to='/login' />
  }

  const PrivateRouteToHome = () => {
    return user ? <Navigate to='/' /> : <Outlet />
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/song/:id' element={<Song />} />
          <Route path='/login' element={<PrivateRouteToHome />}>
            <Route path='/login' element={<Login />} />
          </Route>
          <Route path='/signup' element={<PrivateRouteToHome />}>
            <Route path='/signup' element={<Signup />} />
          </Route>
          <Route path='/create' element={<PrivateRouteToLogin />}>
            <Route path='/create' element={<Create />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
