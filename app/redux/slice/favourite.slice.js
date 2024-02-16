import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    favourite: [],
    error: null
}

const favouriteslice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        addtoFavourite: (state, action) => {
            console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$", action.payload, state.favourite);

            const findFavouriteIndex = state.favourite.findIndex(v => v === action.payload);
           

            if (findFavouriteIndex === -1) {
                state.favourite.push(action.payload);
            } else {
                state.favourite.splice(findFavouriteIndex, 1)
            }
        },
    }
})
export const { addtoFavourite, removeFavourite } = favouriteslice.actions;
export default favouriteslice.reducer