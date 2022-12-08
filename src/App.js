import React from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import About from './components/About/About'
import AdminCourses from './components/Admin/AdminCourses/AdminCourses'
import CreateCourse from './components/Admin/CreateCourse/CreateCourse'
import Dashboard from './components/Admin/Dashboard/Dashboard'
import Users from './components/Admin/Users/Users'
import ForgetPassword from './components/Auth/ForgetPassword'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import ResetPassword from './components/Auth/ResetPassword'
import Contact from './components/Contact/Contact'
import CoursePage from './components/CoursePage/CoursePage'
import Courses from './components/Courses/Courses'
import Home from './components/Home/Home'
import Footer from './components/Layout/Footer/Footer'
import Header from './components/Layout/Header/Header'
import NotFound from './components/Layout/NotFound/NotFound'
import PaymentFail from './components/Payments/PaymentFail'
import PaymentSuccess from './components/Payments/PaymentSuccess'
import Subscribe from './components/Payments/Subscribe'
import ChangePassword from './components/Profile/ChangePassword'
import Profile from './components/Profile/Profile'
import UpdateProfile from './components/Profile/UpdateProfile'
import Request from './components/Request/Request'

const App = () => {
  window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  })
  return (
    <Router>
       <Header />
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/course/:id' element={<CoursePage />} />

           {/* Admin Routes */}
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/createcourse' element={<CreateCourse />} />
          <Route path='/admin/courses' element={<AdminCourses />} />
          <Route path='/admin/users' element={<Users />} />

          {/* Authencation with profile and info */}
          <Route path='/profile' element={<Profile />} />
          <Route path='/changepassword' element={<ChangePassword />} />
          <Route path='/updateprofile' element={<UpdateProfile />} />

           {/* Authencation  */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/request' element={<Request />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
          <Route path='/resetPassword/:token' element={<ResetPassword />} />
          <Route path='*' element={<NotFound />} />

          {/* Payments */}
          <Route path='/subscribe' element={<Subscribe />} />
          <Route path='/paymentsuccess' element={<PaymentSuccess />} />
          <Route path='/paymentfail' element={<PaymentFail />} />
       </Routes>
       <Footer />
    </Router>
  )
}

export default App