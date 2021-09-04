import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import appReducer from './app/appSlice';
import snackbarReducer from './snackbar/snackbarSlice';

const store = configureStore({
    reducer: {
        application: appReducer,
        snackbar: snackbarReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            // thunk: {
            //     extraArgument: myCustomApiService,
            // },
            serializableCheck: false,
        }),
    devTools: process.env.NODE_ENV !== 'production' ? true : false
});

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
