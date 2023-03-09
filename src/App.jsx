import './App.scss';
import { Routes, Route } from 'react-router-dom'
import User from './routers/User';
import Home from './pages/home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
