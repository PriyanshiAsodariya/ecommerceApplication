import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import firestore from '@react-native-firebase/firestore';
// import storage from '@react-native-firebase/storage';


const initialState = {
    Product: [],
    isLoading: false,
    error: null
}



export const addProduct = createAsyncThunk(
    'productSlice/add',
    async (data) => {

        let allData = { ...data }
        console.log("dataaaaaaa", data);

        let tempArr = data.image.path.split("/");
        // console.log("",tempArr);
        let imgName = tempArr[tempArr.length - 1];
        console.log("oooooooooooooooooo", imgName);

        let imgNo = Math.floor(Math.random() * 1000)

        const imgFinalName = imgNo + "_" + imgName;
        console.log("Nammmmmmmmmmeeeeeee", imgFinalName);

        const imgRef = storage().ref('product/' + imgFinalName);

        const task = await imgRef.putFile(data.image.path);
        console.log("77777777777777777777", data);
        console.log("88888888888", data.image.path);

        // await task.then(async () => {
            const imgRefPath = 'product/' + imgFinalName;
            console.log("ppppppppppppppppppppp", imgRefPath);
            const url = await storage().ref(imgRefPath).getDownloadURL();
            console.log("uuuuuuuuuuuuuuuuuuuu", url);

            allData.image = url;
            allData.imgName = imgFinalName;
            // console.log(data,"bbbbbbbbbbbbbbbbbbbbBBBBBBBBBBBBBBBBBB");
            await firestore()
                .collection('product')
                .add({ ...data, image: url, imgName: imgFinalName , createdAt : new Date().toString(), updateAt : new Date().toString() })
                .then((doc) => {
                    // docId = doc.id;
                    allData.id = doc.id;
                    console.log('product added!', doc.id);
                })
                .catch(error => console.log(error))
        // });
        console.log("alllll datataaaaaa", allData);
        return allData;
    }
)

export const getproduct = createAsyncThunk(
    'productSlice/get',
    async () => {
        let data = [];
        try {
            await firestore()
                .collection('product')
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(documentSnapshot => {
                        data.push({
                            id: documentSnapshot.id,
                            ...documentSnapshot.data()
                        })
                        
                    });
                });
            return data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

)

export const deletProduct = createAsyncThunk(
    'productSlice/delete',
    async (data) => {
        console.log("deeeellleeeteeee dataaaaa", data);
        const imgRef = storage().ref('product/' + data.imgName);
        imgRef.delete().then(async () => {
            await firestore()
                .collection('product')
                .doc(data.id)
                .delete()
                .then(() => {
                    console.log('User deleted!');
                }).catch(error => console.log(error))
        })
        return data.id;
    }
)

export const EditProduct = createAsyncThunk(
    'productSlice/update',
    async (data) => {
        if (typeof data.image === 'string') {
            let NewData = { ...data }
            delete NewData.id
            firestore()
                .collection('Users')
                .doc(data.id)
                .update(NewData)
                .then(() => {
                    console.log('User updated!');
                });
            return data;
        } else {

            const imgRef = storage().ref('product/' + data.imgName);
            let allData = { ...data }
            await imgRef.delete().
                then(async () => {

                    console.log("dataaaaaaa", data);

                    let tempArr = data.image.path.split("/");
                    // console.log("",tempArr);
                    let imgName = tempArr[tempArr.length - 1];
                    console.log("oooooooooooooooooo", imgName);

                    let imgNo = Math.floor(Math.random() * 1000)

                    const imgFinalName = imgNo + "_" + imgName;
                    console.log("Nammmmmmmmmmeeeeeee", imgFinalName);

                    const imgRef = storage().ref('product/' + imgFinalName);

                    const task = await imgRef.putFile(data.image.path);
                    console.log("77777777777777777777", data);
                    console.log("88888888888", data.image.path);

                    // await task.then(async () => {
                    const imgRefPath = 'product/' + imgFinalName;
                    console.log("ppppppppppppppppppppp", imgRefPath);
                    const url = await storage().ref(imgRefPath).getDownloadURL();
                    console.log("uuuuuuuuuuuuuuuuuuuu", url);

                    allData.image = url;
                    allData.imgName = imgFinalName;
                    // console.log(data,"bbbbbbbbbbbbbbbbbbbbBBBBBBBBBBBBBBBBBB");
                    let NewData = { ...allData }
                    delete NewData.id
                    await firestore()
                        .collection('product')
                        .doc(data.id)
                        .update(NewData)
                        .then(() => {
                            console.log('product updated!');
                        });
                });
            console.log("55555555555555555555555555555555555555555", allData);
            return allData
        }

    }
)
export const productSlice = createSlice({
    name: "Product",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addProduct.fulfilled, (state, action) => {
            // console.log("productttttt actionnnn ", action);
            state.Product.push(action.payload)
        })
        builder.addCase(getproduct.fulfilled, (state, action) => {
            // console.log("actionnnnnnnn", action);
            state.Product = (action.payload)
        })
        builder.addCase(deletProduct.fulfilled, (state, action) => {
            // console.log("actionnnnnnnn", action);
            state.Product = state.Product.filter((v) => v.id !== action.payload)

        })
        builder.addCase(EditProduct.fulfilled, (state, action) => {
            // console.log("actionnnnnnnnuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu", action);
            state.Product = state.Product.map((v) => {
                if (v.id === action.payload.id) {
                    return action.payload
                } else {
                    return v;
                }
            })
        })
    }
})

export default productSlice.reducer;