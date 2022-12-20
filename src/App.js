import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Users from './components/Admin/Users/Users';
import ForgetPassword from './components/Auth/ForgetPassword';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import CoursePage from './components/CoursePage/CoursePage';
import Courses from './components/Courses/Courses';
import Home from './components/Home/Home';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import NotFound from './components/Layout/NotFound/NotFound';
import PaymentFail from './components/Payments/PaymentFail';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import Subscribe from './components/Payments/Subscribe';
import ChangePassword from './components/Profile/ChangePassword';
import Profile from './components/Profile/Profile';
import UpdateProfile from './components/Profile/UpdateProfile';
import Request from './components/Request/Request';
import toast, { Toaster } from 'react-hot-toast';
import { loadUser } from './redux/actions/user';
import { ProtectedRoute } from 'protected-route-react';
import Loader from './components/Layout/Loader/Loader';

const App = () => {
  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  });

  const { isAuthenticated, user, message, error, loading } = useSelector(
    state => state.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, message, error]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header isAuthenticated={isAuthenticated} user={user} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<ProtectedRoute isAuthenticated={isAuthenticated}>
              <CoursePage user={user} />
            </ProtectedRoute>} />

            {/* Admin Routes */}
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === 'admin'}
                >
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/createcourse"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === 'admin'}
                >
                  <CreateCourse />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/courses"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === 'admin'}
                >
                  <AdminCourses />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === 'admin'}
                >
                  <Users />
                </ProtectedRoute>
              }
            />

            {/* Authencation with profile and info */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Profile user={user} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/changepassword"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ChangePassword />
                </ProtectedRoute>
              }
            />
            <Route
              path="/updateprofile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <UpdateProfile user={user} />
                </ProtectedRoute>
              }
            />

            {/* Authencation  */}
            <Route
              path="/login"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Login />
                </ProtectedRoute>
              }
            />
            <Route
              path="/register"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Register />
                </ProtectedRoute>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/request" element={<Request />} />
            <Route path="/forgetpassword" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
              <ForgetPassword />
            </ProtectedRoute>} />
            <Route path="/resetPassword/:token" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
              <ResetPassword />
            </ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />

            {/* Payments */}
            <Route
              path="/subscribe"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated} >
                  <Subscribe user={user} />
                </ProtectedRoute>
              }
            />
            <Route path="/paymentsuccess" element={<PaymentSuccess />} />
            <Route path="/paymentfail" element={<PaymentFail />} />
          </Routes>
          <Footer />
          <Toaster />
        </>
      )}
    </Router>
  );
};

export default App;
