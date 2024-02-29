import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import firestore from '@react-native-firebase/firestore';
import { firebase } from "@react-native-firebase/auth";



const initialState = {
    isLoading: false,
    order: [],
    error: null
}

export const getOrder = createAsyncThunk(
    'order/getOrder',
    async (data) => {

        console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaa", data);

        let userData ;
        await firestore()
            .collection('order')
            .doc(data.id)
            .get()
            .then(documentSnapshot => {
                console.log('User exists: ', documentSnapshot.exists);

                if (documentSnapshot.exists) {
                    console.log('User dataaaaaaaaaaa: ', documentSnapshot.data());
                    userData = documentSnapshot.data();
                }
            });
        return { ...userData, uid: data.id }

    }
)

export const AddOrder = createAsyncThunk(
    'order/AddOrder',
    
    async (data) => {
        // console.log("ooooooooooooooooooooooUIDDDD", data.uid);
        console.log("oooooooooooooooooooooDataaaa", data.pdata)
        // console.log("oooooooooooooooooooooAddress", data.v);

        const documentSnapshot = await firestore()
            .collection('order')
            .doc(data.uid)
            .get();

        // console.log("existsssssssssssssssss", documentSnapshot.exists);

        if (documentSnapshot.exists) {

            await firebase.firestore()
                .collection('order')
                .doc(data.uid)
                .update({
                    orders: firebase.firestore.FieldValue.arrayUnion({
                        uid: data.uid,  
                        items: data.pdata,
                        shipping_address: data.v,
                        status: 'Processing',
                        total: data.total,
                        date : new Date().toLocaleDateString(),
                        orderNo : Math.floor(Math.random() * 10000)                        
                    })
                })
                .then(() => {
                    console.log('address add!');
                }).catch(error => {
                    console.error('Error adding data to Firestore:', error);
                });

            return { ...data };
        } else {

            await firestore()
                .collection('order')
                .doc(data.uid)
                .set({
                    orders: [
                        {
                            uid: data.uid,
                            items: data.pdata,
                            shipping_address: data.v,
                            status: 'processing',
                            total: data.total,
                            date : new Date().toLocaleDateString(),
                            orderNo : Math.floor(Math.random() * 10000)      
                        }
                    ]
                })
                .then(() => {
                    console.log('Order added!');
                });
            return data;
        }

    }
)

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(AddOrder.fulfilled, (state, action) => {
            // console.log("payloadddddddddddddddd", action.payload);
            state.order.push(action.payload)
            // console.log("stateeeeeeeeeeeeee", state);
        }),
        builder.addCase(getOrder.fulfilled, (state, action) => {
            // console.log("payloadddddddddddddddd", action.payload);
            state.order = action.payload
            // console.log("stateeeeeeeeeeeeee", state);
        })
    }
})

export default orderSlice.reducer