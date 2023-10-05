import { configureStore } from "@reduxjs/toolkit";
import heroesReducer from "./heroes/heroesSlice"

export default configureStore({
    reducer: {
        heroes: heroesReducer
    }
})