import {createSlice} from "@reduxjs/toolkit"
import {getHeroes} from "./heroesAction"

const heroesSlice = createSlice({
    name: "heroes",
    initialState: {
        heroes: [],
        loading: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getHeroes.pending, (state) => {
                state.loading = true
            })
            .addCase(getHeroes.fulfilled, (state, action) => {
                state.loading = false
                state.heroes = action.payload
                console.log(action.payload);
            })
            .addCase(getHeroes.rejected, (state) => {
                state.loading = false
            })
    }
})

export default heroesSlice.reducer