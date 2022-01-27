import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './Login';
import Register from './Register';
import UrlShortener from './UrlShortener';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/url-shortener" element={<UrlShortener />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
