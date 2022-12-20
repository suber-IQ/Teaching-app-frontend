import { createReducer } from '@reduxjs/toolkit';

export const adminReducer = createReducer(
  {},
  {
    // Get Admin Stats
    getAdminStatsRequest: state => {
      state.loading = true;
    },
    getAdminStatsSuccess: (state, action) => {
      state.loading = false;
      state.stats = action.payload.stats;
      state.usersCount = action.payload.usersCount;
      state.subscriptionsCount = action.payload.subscriptionsCount;
      state.viewsCount = action.payload.viewsCount;
      state.usersPercentage = action.payload.usersPercentage;
      state.viewsPercentage = action.payload.viewsPercentage;
      state.subscriptionsPercentage = action.payload.subscriptionsPercentage;
      state.subscriptionsProfit = action.payload.subscriptionsProfit;
      state.viewsProfit = action.payload.viewsProfit;
      state.usersProfit = action.payload.usersProfit;
    },
    getAdminStatsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // GetAll Users
    getAllUserRequest: state => {
      state.loading = true;
    },
    getAllUserSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    getAllUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Update User Role
    updateUserRoleRequest: state => {
      state.loading = true;
    },
    updateUserRoleSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateUserRoleFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Delete User from admin
    deleteUserRequest: state => {
      state.loading = true;
    },
    deleteUserSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Create course
    createCourseRequest: state => {
      state.loading = true;
    },
    createCourseSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    createCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Create course
    deleteCourseRequest: state => {
      state.loading = true;
    },
    deleteCourseSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Add lecture into course
    addLectureRequest: state => {
      state.loading = true;
    },
    addLectureSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    addLectureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Delete Lecture
    deleteLectureRequest: state => {
      state.loading = true;
    },
    deleteLectureSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteLectureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    
    clearError: state => {
      state.error = null;
    },
    clearMessage: state => {
      state.message = null;
    },
  }
);
