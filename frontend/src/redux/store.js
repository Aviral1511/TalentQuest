import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";  // Import the reducer from authSlice
import jobReducer from './jobSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,  // Add the auth reducer to the store
    job: jobReducer,
  },
  // Default middleware from Redux Toolkit includes `redux-thunk`
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),  // Disable serializable check for FormData
});

export default store;
