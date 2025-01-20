import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/Resetpassword';
import Pricing from './pages/Pricing';
import Services from './pages/Services';
import PageLayout from './layout/PageLayout';
import ServicesDetails from './components/ServicesDetails';
import CursorSnack from './components/CursorSnack';

const App = () => {
  return (
    <Router>
      <CursorSnack/>
      <Routes>
      <Route element={<PageLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/login" element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/forgot-password' element={<ForgetPassword/>} />
        <Route path="/rest-password" element={<ResetPassword/>} />
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/services' element={<Services/>} />
           {/* Dynamic route for service details */}
           <Route path="/service/:id" element={<ServicesDetails/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
