import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import firestore from '@react-native-firebase/firestore';
// import storage from '@react-native-firebase/storage';


const initialState = {
    SubCategory: [],
    isLoading: false,
    error: null
}


export const getSubCat = createAsyncThunk(
    'SubCategorySlice/get',
    async () => {
        let data = [];
        try {
            await firestore()
                .collection('SubCategory')
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(documentSnapshot => {
                        data.push({
                            id: documentSnapshot.id,
                            ...documentSnapshot.data()
                        })
                        // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                    });
                });

                console.log("jjjjjjjjjjjjjj", data);
            return data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
)


export const SubCategorySlice = createSlice({
    name: "SubCategory",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
      
        builder.addCase(getSubCat.fulfilled, (state, action) => {
            console.log("actionnnnnnnn", action);
            state.SubCategory = action.payload
            // console.log("vvvvvvvvvvvv",v);
        })
    }
})

export default SubCategorySlice.reducer;