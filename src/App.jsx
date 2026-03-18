import { Routes, Route } from 'react-router';
import Start from './pages/Start';
import Us from './pages/Us';
import Login from './pages/Login';
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/sobre" element={<Us />} />
        <Route path="/productos" element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
