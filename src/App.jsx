import './App.scss';
import { Routes, Route } from 'react-router-dom'
import User from './routers/User';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
