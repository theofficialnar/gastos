import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { auth } from '../firestore';

const provider = new GoogleAuthProvider();

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

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        email: '',
        name: '',
    },
    extraReducers: (builder) => {
        builder.addCase(logInUser.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.email = action.payload?.email;
            state.name = action.payload?.name;
        });
    },
});

export default userSlice.reducer;
