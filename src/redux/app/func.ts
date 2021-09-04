import { createAsyncThunk } from '@reduxjs/toolkit';
import { showNotification } from '../snackbar/snackbarSlice';

interface IUser {
    name: string;
    email: string;
}

const getUserSession = createAsyncThunk('auth/getUser', async (state, { dispatch, rejectWithValue }) => {
    try {
        // temporary holding ui for 1 second to mimic the response
        const response: any = new Promise<IUser>((resolve) => {
            setTimeout(() => {
                resolve({ name: 'Nirav Adatiya', email: 'niravjadatiya@gmail.com', });
            }, 1000);
        });
        return response;
    }
    catch (err) {
        console.log('err', err);
        dispatch(showNotification({ type: 'error', msg: 'Oops something went wrong!!' }));
        return rejectWithValue(err);
    }
});

const signOut = createAsyncThunk('auth/signOut', async (state, { rejectWithValue }) => {
    try {
        const response: any = new Promise<null>((resolve) => {
            setTimeout(() => {
                resolve(null);
            }, 1000);
        });
        return response;
    }
    catch (err) {
        console.log('err', err);
        return rejectWithValue(err);
    }
});

export { getUserSession, signOut };
