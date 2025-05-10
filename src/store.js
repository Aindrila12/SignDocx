import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./Features/Counter/counterslice";
import menuReducer from "./Features/Counter/menushow";

export default configureStore({
  reducer: {
    counter: counterReducer,
    menushow: menuReducer
  },
})