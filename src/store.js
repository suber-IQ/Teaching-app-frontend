import { configureStore } from '@reduxjs/toolkit'
import { adminReducer } from './redux/reducers/adminReducer';
import { courseReducer } from './redux/reducers/courseReducer';
import { otherReducer } from './redux/reducers/otherReducer';
import { profileReducer, subscriptionReducer, userReducer } from './redux/reducers/userReducer';

const store = configureStore({
    reducer: {
      user: userReducer,
      profile: profileReducer,
      course: courseReducer,
      subscription: subscriptionReducer,
      admin: adminReducer,
      other: otherReducer
    }
})

export default store;

export const server = 'https://course-bundler-backend.vercel.app/api/v1';