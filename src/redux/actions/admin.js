import { server } from '../../store';
import axios from 'axios';

// Create Course
export const createCourse = (formData) => async dispatch => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      };
    dispatch({ type: 'createCourseRequest' });

    const { data } = await axios.post(`${server}/createcourse`,formData,config);

    dispatch({ type: 'createCourseSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'createCourseFail',
      payload: error.response.data.message,
    });
  }
};
// Delete Course
export const deleteCourse = (id) => async dispatch => {
    try {
      const config = {
        withCredentials: true,
      };
    dispatch({ type: 'deleteCourseRequest' });

    const { data } = await axios.delete(`${server}/course/${id}`,config);

    dispatch({ type: 'deleteCourseSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'deleteCourseFail',
      payload: error.response.data.message,
    });
  }
};
// Add Lecture
export const addLecture = (id,formdata) => async dispatch => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      };
    dispatch({ type: 'addLectureRequest' });

    const { data } = await axios.post(`${server}/course/${id}`,formdata,config);

    dispatch({ type: 'addLectureSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'addLectureFail',
      payload: error.response.data.message,
    });
  }
};
// Delete Lecture
export const deleteLecture = (courseId,lectureId) => async dispatch => {
    try {
      const config = {
        withCredentials: true,
      };
    dispatch({ type: 'deleteLectureRequest' });

    const { data } = await axios.delete(`${server}/lecture?courseId=${courseId}&lectureId=${lectureId}`,config);

    dispatch({ type: 'deleteLectureSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'deleteLectureFail',
      payload: error.response.data.message,
    });
  }
};
// get all Users
export const getAllUsers = () => async dispatch => {
    try {
      const config = {
        withCredentials: true,
      };
    dispatch({ type: 'getAllUserRequest' });

    const { data } = await axios.get(`${server}/admin/users`,config);

    dispatch({ type: 'getAllUserSuccess', payload: data.users });
  } catch (error) {
    dispatch({
      type: 'getAllUserFail',
      payload: error.response.data.message,
    });
  }
};
// get all Users
export const updateUserRole = (id) => async dispatch => {
    try {
      const config = {
        withCredentials: true,
      };
    dispatch({ type: 'updateUserRoleRequest' });

    const { data } = await axios.put(`${server}/admin/user/${id}`,{},config);

    dispatch({ type: 'updateUserRoleSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'updateUserRoleFail',
      payload: error.response.data.message,
    });
  }
};
// get all Users
export const deleteUser = (id) => async dispatch => {
    try {
      const config = {
        withCredentials: true,
      };
    dispatch({ type: 'deleteUserRequest' });

    const { data } = await axios.delete(`${server}/admin/user/${id}`,config);

    dispatch({ type: 'deleteUserSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'deleteUserFail',
      payload: error.response.data.message,
    });
  }
};
// get Dashboard Stats
export const getDashboardStats = () => async dispatch => {
    try {
      const config = {
        withCredentials: true,
      };
    dispatch({ type: 'getAdminStatsRequest' });

    const { data } = await axios.get(`${server}/admin/stats`,config);

    dispatch({ type: 'getAdminStatsSuccess', payload: data });
  } catch (error) {
    dispatch({
      type: 'getAdminStatsFail',
      payload: error.response.data.message,
    });
  }
};
