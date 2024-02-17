import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

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


// export const siginFacebook = createAsyncThunk(
//     'auth/siginFacebook',
//     async () => {
//         // Attempt login with permissions
//         const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

//         if (result.isCancelled) {
//             console.log( "Login cancelled" );
//             throw 'User cancelled the login process';
//         }else{
//             result.grantedPermissions.toString();
//         }

//         // Once signed in, get the users AccessToken
//         const data = await AccessToken.getCurrentAccessToken();

//         if (!data) {
//             throw 'Something went wrong obtaining access token';
//         }

//         // Create a Firebase credential with the AccessToken
//         const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

//         // Sign-in the user with the credential
//         return auth().signInWithCredential(facebookCredential);
//     }
// )


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
            console.log("productttttt actionnnn ", action);
            state.user = action.payload
        })
    }

})


export default authslice.reducer