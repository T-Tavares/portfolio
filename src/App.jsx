import './App.css';

import {Routes, Route, Link} from 'react-router-dom';
import Navbar from './pages/UI/Navbar/Navbar';
import Landing from './pages/Landing/Landing';
import Footer from './pages/UI/Footer/Footer';

import About from './pages/About/About';
import Projects from './pages/UI/Projects/Projects';
import Curriculum from './pages/Curriculum/Curriculum';
import Contact from './pages/Contact/Contact';

function App() {
    //prettier-ignore
    return (
        <div id="app">
            <div id="modal"></div>
            <Navbar />
            <div id="content">
                <Routes>
                    <Route path='/' element={<Landing/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/projects' element={<Projects title="Projects"/>}/>
                    <Route path='/curriculum' element={<Curriculum/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>
            </div>
            <div id="footer"><Footer/></div>
        </div>
    );
}

export default App;
