import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import BuyNow from './components/BuyNow/BuyNow';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Courses from './components/Courses/Courses';
import Dashboard from './components/Dashboard/Dashboard';
import GiveReview from './components/GiveReview/GiveReview';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import MyOrders from './components/MyOrders/MyOrders';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
        <AuthProvider>
          <BrowserRouter>
              <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/home" element={<Home></Home>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/register" element={<Register></Register>}></Route>
                    <Route path="/courses" element={<Courses></Courses>}></Route>
                    <Route path="/dashboard" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>
                        <Route exact path="/dashboard" element={<h3>Please select a topic.</h3>}></Route>
                        <Route path="/dashboard/myorders" element={<MyOrders></MyOrders>}></Route>
                        <Route path="/dashboard/review" element={<GiveReview></GiveReview>}></Route>
                    </Route>
                    <Route path="/courseDetails/:courseId" element={<CourseDetails></CourseDetails>}></Route>
                    <Route path="/buyNow/:courseId" element={<PrivateRoute><BuyNow></BuyNow></PrivateRoute>}></Route>
                    <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
                    <Route path="*" element={<NotFound></NotFound>}></Route>
              </Routes>
          </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
