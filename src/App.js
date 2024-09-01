import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Courses from './Components/Courses/Courses';
import Signup from './Components/Signup';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />





        </Routes>
      </div>
    </>
  );
}

export default App;
