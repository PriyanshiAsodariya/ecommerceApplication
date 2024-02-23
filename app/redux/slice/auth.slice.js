import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import auth, { firebase } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import firestore from '@react-native-firebase/firestore';
import { useSelector } from "react-redux";

import storage from '@react-native-firebase/storage';


const initialState = {
    isLoading: false,
    user: null,
    error: null
}

export const signupwithEmail = createAsyncThunk(
    'auth/singupwithEmail',
    async (data) => {
        console.log("ppppppppppppppppppppppppppppppppp", data);
        await auth()
            .createUserWithEmailAndPassword(data.email, data.password)
            .then(async (userCredential) => {
                await firestore()
                    .collection('user')
                    .doc(userCredential.user.uid)
                    .set({ Name: data.Name, email : data.email,emailVerified: false, id: userCredential.user.uid, createdAt: new Date().toString(), updateAt: new Date().toString() })
                    .then(() => {
                        // docId = doc.id;
                        console.log("succesufully login");
                    })
                    .catch(error => console.log(error))


                console.log('User account created & signed in!', userCredential);
                await userCredential.user.sendEmailVerification();
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }
)

export const Loginwithemail = createAsyncThunk(
    'auth/Loginwithemail',
    async (data) => {
        console.log("ppppppppppppppppppppppppppppppppp", data);
        const user = await auth()
            .signInWithEmailAndPassword(data.email, data.password)
            .then((user) => {
                console.log(user);
                if (user.user.emailVerified) {

                    firestore()
                        .collection('user')
                        .doc(user.user.uid)
                        .update({ emailVerified: true })
                        .then(() => {
                            console.log('User updated!');
                        });
                    console.log('User account login in!');
                    return user.user;
                } else {
                    console.log("Please verify your email.");
                }
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                if (error.code === 'auth/invalid-credential') {
                    console.log("Invalid email or password.");
                }

                // console.error(error);
            });

        return user;
    }
)


export const sigingoogle = createAsyncThunk(
    'auth/sigingoogle',
    async () => {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const user = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(user.idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);

    }
)

export const siginFacebook = createAsyncThunk(
    'auth/signInFacebook',
    async () => {
        try {
            // Attempt login with permissions
            const result = await LoginManager.logInWithPermissions(['public_profile', "email"]);

            if (result.isCancelled) {
                console.log("Login cancelled");
                throw 'User cancelled the login process';
            }

            // Once signed in, get the user's AccessToken
            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
                throw 'Something went wrong obtaining access token';
            }

            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

            // Sign-in the user with the credential
            const userCredential = await auth().signInWithCredential(facebookCredential);

            return userCredential.user; // Assuming you want to return the user object
        } catch (error) {
            console.error('Error signing in with Facebook:', error);
            throw error; // Rethrow the error to be handled by Redux Toolkit
        }
    }
);

export const addAdress = createAsyncThunk(
    'auth/addAddress',
    async (data) => {
        console.log("ddddddddddddddddddddddddddddd", data, data.uid);

        //update    uid     
        await firestore()
            .collection('user')
            .doc(data.uid)
            // .update({ address: data.address })
            .update({
                address: firebase.firestore.FieldValue.arrayUnion(data.address)
            })
            .then(() => {
                console.log('address add!');
            });

        let userData;
        await firestore()
            .collection('user')
            .doc(data.uid)
            .get()
            .then(documentSnapshot => {
                console.log('User exists: ', documentSnapshot.exists);

                if (documentSnapshot.exists) {
                    console.log('User data: ', documentSnapshot.data());
                    userData = documentSnapshot.data();
                }
            });
        return { ...userData, uid: data.uid }
    }
)

export const deleteAddress = createAsyncThunk(
    'auth/deleteAddress',
    async (data) => {
        console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhh", data);
        try {
            await firestore()
                .collection('user')
                .doc(data.uid)
                // .update({ address: data.address })
                .update({
                    address: firebase.firestore.FieldValue.arrayRemove(data.address)
                })
                .then(() => {
                    console.log('address delete!');
                });
        } catch (error) {
            console.log("eeeeeeeeeeeeeeee", error);
        }

        let userData;
        await firestore()
            .collection('user')
            .doc(data.uid)
            .get()
            .then(documentSnapshot => {
                console.log('User exists: ', documentSnapshot.exists);

                if (documentSnapshot.exists) {
                    console.log('User data: ', documentSnapshot.data());
                    userData = documentSnapshot.data();
                }
            });

        return { ...userData, uid: data.uid };
    }
)

export const editAddress = createAsyncThunk(
    'auth/editAddress',
    async (data) => {
        console.log("eddddiiitttttttttttt", data);
        try {
            await firestore()
                .collection('user')
                .doc(data.uid)
                // .update({ address: data.address })
                .update({
                    address: firebase.firestore.FieldValue.arrayRemove(data.olddata)
                })
                .then(() => {
                    console.log('address delete!');
                });
        } catch (error) {
            console.log("eeeeeeeeeeeeeeee", error);
        }

        await firestore()
            .collection('user')
            .doc(data.uid)
            // .update({ address: data.address })
            .update({
                address: firebase.firestore.FieldValue.arrayUnion(data.address)
            })
            .then(() => {
                console.log('address add!');
            });

        let userData;
        await firestore()
            .collection('user')
            .doc(data.uid)
            .get()
            .then(documentSnapshot => {
                console.log('User exists: ', documentSnapshot.exists);

                if (documentSnapshot.exists) {
                    console.log('User data: ', documentSnapshot.data());
                    userData = documentSnapshot.data();
                }
            });
        return { ...userData, uid: data.uid }

    }






)

export const profileAdd = createAsyncThunk(
    'auth/profile',
    async  (data) =>{
        console.log("profilllllllllleeeeeeeeee",data);

        console.log(data.values.image.path);

        let alldata = {...data}

        let temparr = data.values.image.path.split('/')
        // console.log("aaaaaaaarrrrr",temparr);

        let imgName = temparr[temparr.length-1];
        console.log("imgggggggggggggggggggg",imgName);

        const mathId = Math.floor(Math.random() * 1000);

        const imgfinalName = mathId + '--' + imgName;
        console.log("finnaalllllll",imgfinalName);

        const imgRefPath = 'Profile/' + imgfinalName;

        const imgRef = await storage().ref(imgRefPath);

        const task = await imgRef.putFile(data.values.image.path);

        
        console.log("ppppppppppppppppppppppppppppppppppppppppp", imgRefPath);
        const url = await storage().ref(imgRefPath).getDownloadURL();
        console.log("uuuuuuuuuuuuuuuuuuuu", url);

        await firestore()
        .collection('user')
        .doc(data.uid)
        .update({ number: data.values.number ,imgName : imgfinalName ,imgURL : url })
        .then(() => {
            console.log('number add!');
        });
    }
)
export const authslice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(Loginwithemail.fulfilled, (state, action) => {
            // console.log("productttttt actionnnn ", action);
            state.user = action.payload
        })
        builder.addCase(sigingoogle.fulfilled, (state, action) => {
            // console.log("productttttt actionnnn ", action);
            state.user = action.payload
        })
        builder.addCase(siginFacebook.fulfilled, (state, action) => {
            // console.log("productttttt actionnnn ", action);
            state.user = action.payload
        })
        builder.addCase(addAdress.fulfilled, (state, action) => {
            // console.log("productttttt actionnnn ", action.payload);

            state.user = action.payload
        })
        builder.addCase(deleteAddress.fulfilled, (state, action) => {
            //     console.log("productttttt actionnnn ", action.payload);

            state.user = action.payload
            // state.user = action.payload ? [...state.user, action.payload] : state.user;

        })
        builder.addCase(editAddress.fulfilled, (state, action) => {
          
console.log("actionnnnnnnnnnnnnn",action.payload);
            state.user = action.payload
          
        })
    }
})
export default authslice.reducer

//console.log.*$