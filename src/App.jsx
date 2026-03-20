import { Routes, Route } from 'react-router';
import Start from './pages/Start';
import Us from './pages/Us';
import Login from './pages/Login';
import NotFound from './pages/NotFound'
import Courses from './pages/Courses';
import Navbar from './components/Navbar'
import Copy from './components/Copy';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/nosotros" element={<Us />} />
        <Route path="/cursos" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
