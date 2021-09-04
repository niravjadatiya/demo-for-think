import { createSlice } from '@reduxjs/toolkit';
import { getUserSession, signOut } from './func';

export const appSlice = createSlice({
    name: 'application',
    initialState: {
        userData: null,
        isLoading: true,
    },
    reducers: {
        // this is action cum reducer function
        setIsFormEdited: (state,
            // { payload }
        ) => {
            // state.isFormEdited = payload;
            return state;
        },
    },
    extraReducers: {
        // ---------------------------------------------- setUserSession starts
        [getUserSession.pending.type]: (state) => {
            state.isLoading = true;
            return state;
        },
        [getUserSession.fulfilled.type]: (state, action) => {
            // console.log({ state }, { action });
            state.userData = action.payload;
            state.isLoading = false;
            console.log(state, action);
            return state;
        },
        [getUserSession.rejected.type]: (state) => {
            state.isLoading = false;
            return state;
        },
        // setUserSession ends

        // ---------------------------------------------- signOut starts
        [signOut.pending.type]: (state) => {
            state.isLoading = true;
            return state;
        },
        [signOut.fulfilled.type]: (state) => {
            state.userData = null;
            state.isLoading = false;
            return state;
        },
        [signOut.rejected.type]: (state) => {
            state.isLoading = false;
            return state;
        },
        // signOut ends
    },
});

export const { setIsFormEdited } = appSlice.actions;
export { getUserSession, signOut };
export const authUser = (state: any) => state.application.userData;

export default appSlice.reducer;
