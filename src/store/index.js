import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./reducer/uiSlice";

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer
    }
})

export default store;