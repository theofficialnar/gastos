import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

import { auth } from '../firestore';

const provider = new GoogleAuthProvider();

/**
 * Firebase call to log user in
 */
export const logInUser = createAsyncThunk('user/logIn', async () =>
    signInWithPopup(auth, provider)
        .then((result) => {
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            const { user } = result;

            return {
                email: user.email,
                name: user.displayName,
            };
        })
        .catch((error) => Promise.reject(error))
);

/**
 * Firebase call to log user out
 */
export const logOutUser = createAsyncThunk('user/logOut', async () =>
    signOut(auth)
        .then(() => ({}))
        .catch((error) => Promise.reject(error))
);

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        email: '',
        name: '',
    },
    extraReducers: (builder) => {
        builder
            .addCase(logInUser.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.email = action.payload?.email;
                state.name = action.payload?.name;
            })
            .addCase(logOutUser.fulfilled, (state) => {
                state.isLoggedIn = false;
                state.email = '';
                state.name = '';
            });
    },
});

export default userSlice.reducer;
