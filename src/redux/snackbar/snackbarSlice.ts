import { createSlice } from '@reduxjs/toolkit';

export const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState: {
        msg: null,
        type: null,
    },
    reducers: {
        showNotification: (state, { payload }: any) => {
            state.msg = payload.msg;
            state.type = payload.type;
            return state;
        },
        clearState: (state) => {
            state.msg = null;
            state.type = null;
            return state;
        },
    },
});

export const { showNotification, clearState } = snackbarSlice.actions;

export default snackbarSlice.reducer;
