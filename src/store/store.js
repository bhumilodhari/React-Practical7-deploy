import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./detail";

const store = configureStore({
    reducer : {card : cardSlice.reducer}
})

export default store;