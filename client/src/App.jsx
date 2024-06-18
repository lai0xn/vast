import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Platforms from './pages/Platforms';
import Auth from './pages/Auth';
import Add from './pages/Add'
import About from './pages/About'
import Edit from './pages/Edit'
import Delete from './pages/Delete'
import MEP from './pages/MEP'
import Backup from './pages/Backup'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/platforms" element={<Platforms />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/About" element={<About />} />
        <Route path="/About/:id" element={<About />} />
        <Route path="/Edit" element={<Edit />} />
        <Route path="/Edit/:id" element={<Edit />} />
        <Route path="/Delete" element={<Delete />} />inu
        <Route path="/Delete/:id" element={<Delete />} />
        <Route path="/MEP" element={<MEP />} />
        <Route path="/MEP/:id" element={<MEP />} />
        <Route path="/Backup" element={<Backup />} />
        <Route path="/Backup/:id" element={<Backup />} />
      </Routes>
    </Router>
  );
};

export default App;
