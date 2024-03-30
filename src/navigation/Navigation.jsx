import Slide1 from '../modules/slide-1/Slide1';
import Slide2 from '../modules/slide-2/Slide2';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function Navigation() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Slide1/>} />
                <Route path="/slide-2" element={<Slide2/>} />
            </Routes>
        </Router>
    );
}
