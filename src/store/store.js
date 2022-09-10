import { configureStore } from "@reduxjs/toolkit";
import Api from "./Api";
export default configureStore({
  reducer: {
    allData: Api,
  },
});
