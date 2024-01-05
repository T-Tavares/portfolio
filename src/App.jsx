import './App.css';
import Navbar from './pages/UI/Navbar/Navbar';
import Landing from './pages/Landing/Landing';
import Footer from './pages/UI/Footer/Footer';

function App() {
    //prettier-ignore
    return (
        <div id="app">
            <div id="nav"><Navbar /></div>
            <div id="content"><Landing/></div>
            <div id="footer"><Footer/></div>
        </div>
    );
}

export default App;
