import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import BuyNow from './components/BuyNow/BuyNow';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Courses from './components/Courses/Courses';
import DashBoard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
        <AuthProvider>
          <BrowserRouter>
              <Header></Header>
              <Routes>
                  <Route path="/" element={<Home></Home>}></Route>
                  <Route path="/home" element={<Home></Home>}></Route>
                  <Route path="/login" element={<Login></Login>}></Route>
                  <Route path="/register" element={<Register></Register>}></Route>
                  <Route path="/courses" element={<Courses></Courses>}></Route>
                  <Route path="/courseDetails/:courseId" element={<CourseDetails></CourseDetails>}></Route>
                  <Route path="/buyNow/:courseId" element={<BuyNow></BuyNow>}></Route>
                  <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
                  <Route path="*" element={<NotFound></NotFound>}></Route>
              </Routes>
              <Footer></Footer>
          </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
